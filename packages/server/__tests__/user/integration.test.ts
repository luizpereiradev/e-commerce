import chai from "chai";
import sinon from "sinon";
import chaiHttp from "chai-http";
import UserRepository from "../../src/user/repository";
import app from "../../src/app";
import * as fakeData from "./fakeData";
import Logger from "../../src/utils/logger";
import JwtToken from "../../src/utils/jwtToken";

chai.use(chaiHttp);
const { expect } = chai;

describe("GET /user", () => {
  describe("em caso de sucesso", () => {
    before(() => {
      sinon.stub(UserRepository.prototype, "getAll").resolves(fakeData.get.mock);
      sinon.stub(Logger, "save").resolves();
      sinon.stub(JwtToken.prototype, "verify").returns({ id: 1 });
    });

    after(() => {
      (UserRepository.prototype.getAll as sinon.SinonStub).restore();
      (Logger.save as sinon.SinonStub).restore();
    });

    it("deve retornar um array de usuários e enviar status 200", async () => {
      const { status, body } = await chai.request(app).get("/user").auth("token", { type: "bearer" });

      expect(status).to.be.equal(200);
      expect(body).to.be.an("array");
      expect(body).to.be.deep.equal(fakeData.get.response);
      expect((Logger.save as sinon.SinonStub).calledWith("getAll() success")).to.be.true;
    });
  });

  describe("em caso de erro no banco de dados", () => {
    before(() => {
      sinon.stub(UserRepository.prototype, "getAll").throws(new Error("db error"));
      sinon.stub(Logger, "save").resolves();
    });

    after(() => {
      (UserRepository.prototype.getAll as sinon.SinonStub).restore();
      (Logger.save as sinon.SinonStub).restore();
    });

    it("deve retornar a mensagem do erro e enviar status 500", async () => {
      const { status, body } = await chai.request(app).get("/user").auth("token", { type: "bearer" });

      expect(status).to.be.equal(500);
      expect(body).to.have.property("error");
      expect(body.error.message).to.be.equal("db error");
      expect((Logger.save as sinon.SinonStub).calledWith("getAll() fail")).to.be.true;
    });
  });
});

describe('PUT /user/:id', () => {
  describe('caso o usuário exista', () => {
    before(() => {
      sinon.stub(UserRepository.prototype, 'update').resolves(fakeData.put.mock);
      sinon.stub(UserRepository.prototype, 'getById').resolves(fakeData.put.getByIdMock);
      sinon.stub(Logger, 'save').resolves();
    });

    after(() => {
      (UserRepository.prototype.update as sinon.SinonStub).restore();
      (UserRepository.prototype.getById as sinon.SinonStub).restore();
      (Logger.save as sinon.SinonStub).restore();
    });

    it('deve retornar o usuário atualziado e enviar status 200', async () => {
      const { status, body } = await chai.request(app).put('/user/2 ').send(fakeData.put.request).auth("token", { type: "bearer" });


      expect(status).to.be.equal(200);
      expect(body).to.be.an('object');
      expect(body).to.be.deep.equal(fakeData.put.response);
      expect((Logger.save as sinon.SinonStub).calledWith('update() success')).to.be.true;
    });
  });

  describe('caso o usuário não exista', () => {
    before(() => {
      sinon.stub(UserRepository.prototype, 'update').resolves(fakeData.put.mock);

      sinon.stub(UserRepository.prototype, 'getById').resolves(null);

      sinon.stub(Logger, 'save').resolves();
    });

    after(() => {
      (UserRepository.prototype.update as sinon.SinonStub).restore();
      (UserRepository.prototype.getById as sinon.SinonStub).restore();
      (Logger.save as sinon.SinonStub).restore();
    });

    it('deve retornar a mensagem do erro e enviar status 404', async () => {
      const { status, body } = await chai.request(app).put('/user/9999').send(fakeData.put.mock).auth("token", { type: "bearer" });

      expect(status).to.be.equal(404);

      expect(body).to.have.property('error');

      expect(body.error.message).to.be.equal('user not found');
      expect((Logger.save as sinon.SinonStub).calledWith('update() fail')).to.be.true;
    });
  });
});


describe('POST /user', () => {
  describe('em caso de sucesso', () => {
    before(() => {
      sinon.stub(UserRepository.prototype, 'create').resolves(fakeData.post.response);
      sinon.stub(Logger, 'save').resolves();
    });

    after(() => {
      (UserRepository.prototype.create as sinon.SinonStub).restore();
      (Logger.save as sinon.SinonStub).restore();
    });

    it('deve criar um novo usuário e enviar status 201', async () => {
      const { status, body } = await chai.request(app).post('/user').send(fakeData.post.request).auth('token', { type: 'bearer' });


      expect(status).to.be.equal(201);
      expect(body).to.be.an('object');
      expect(body).to.be.deep.equal(fakeData.post.response);
      expect((Logger.save as sinon.SinonStub).calledWith('create() success')).to.be.true;
    });
  });

  describe('em caso de erro no banco de dados', () => {
    before(() => {
      sinon.stub(UserRepository.prototype, 'create').throws(new Error('db error'));
      sinon.stub(Logger, 'save').resolves();
    });

    after(() => {
      (UserRepository.prototype.create as sinon.SinonStub).restore();
      (Logger.save as sinon.SinonStub).restore();
    });

    it('deve retornar a mensagem do erro e enviar status 500', async () => {
      const { status, body } = await chai.request(app).post('/user').send(fakeData.post.request).auth('token', { type: 'bearer' });

      expect(status).to.be.equal(500);
      expect(body).to.have.property('error');
      expect(body.error.message).to.be.equal('db error');
      expect((Logger.save as sinon.SinonStub).calledWith('create() fail')).to.be.true;
    });
  });
});

describe('DELETE /user/:id', () => {
  describe('caso o usuário exista', () => {
    before(() => {
      sinon.stub(UserRepository.prototype, 'delete').resolves(fakeData.del.mock);
      sinon.stub(UserRepository.prototype, 'getById').resolves(fakeData.del.getByIdMock);
      sinon.stub(Logger, 'save').resolves();
    });

    after(() => {
      (UserRepository.prototype.delete as sinon.SinonStub).restore();
      (UserRepository.prototype.getById as sinon.SinonStub).restore();
      (Logger.save as sinon.SinonStub).restore();
    });

    it('deve retornar uma mensagem de sucesso e enviar status 200', async () => {
      const { status, body } = await chai.request(app).delete('/user/2').auth('token', { type: 'bearer' });

      expect(status).to.be.equal(204);
      expect(body).to.be.an('object');
      expect((Logger.save as sinon.SinonStub).calledWith('delete() success')).to.be.true;
    });
  });

  describe('caso o usuário não exista', () => {
    before(() => {
      sinon.stub(UserRepository.prototype, 'delete').resolves(fakeData.del.mock);
      sinon.stub(UserRepository.prototype, 'getById').resolves(null);
      sinon.stub(Logger, 'save').resolves();
    });

    after(() => {
      (UserRepository.prototype.delete as sinon.SinonStub).restore();
      (UserRepository.prototype.getById as sinon.SinonStub).restore();
      (Logger.save as sinon.SinonStub).restore();
    });

    it('deve retornar a mensagem de erro e enviar status 404', async () => {
      const { status, body } = await chai.request(app).delete('/user/9999').auth('token', { type: 'bearer' });

      expect(status).to.be.equal(404);
      expect(body).to.have.property('error');
      expect(body.error.message).to.be.equal('user not found');
      expect((Logger.save as sinon.SinonStub).calledWith('delete() fail')).to.be.true;
    });
  });
});