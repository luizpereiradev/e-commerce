import chai from "chai";
import sinon from "sinon";
import chaiHttp from "chai-http";
import app from "../../src/app";
import * as fakeData from "./fakeData";
import Logger from "../../src/utils/logger";
import JwtToken from "../../src/utils/jwtToken";
import CategoryRepository from "../../src/category/repository";

chai.use(chaiHttp);
const { expect } = chai;

describe("testes /categories", () => {
  describe("GET /categories", () => {
    describe("em caso de sucesso", () => {
      before(() => {
        sinon
          .stub(CategoryRepository.prototype, "getAll")
          .resolves(fakeData.get.mock);
        sinon.stub(Logger, "save").resolves();
        sinon.stub(JwtToken.prototype, "verify").returns({ id: 1 });
      });

      after(() => {
        (CategoryRepository.prototype.getAll as sinon.SinonStub).restore();
        (Logger.save as sinon.SinonStub).restore();
        (JwtToken.prototype.verify as sinon.SinonStub).restore();
      });

      it("deve retornar um array de categorias e enviar status 200", async () => {
        const { status, body } = await chai
          .request(app)
          .get("/categories")
          .auth("token", { type: "bearer" });

        expect(status).to.be.equal(200);
        expect(body).to.be.an("array");
        expect(body).to.be.deep.equal(fakeData.get.response);
        expect(
          (Logger.save as sinon.SinonStub).calledWith(
            "category getAll() success"
          )
        ).to.be.true;
      });
    });
  });

  describe("POST /categories", () => {
    describe("em caso de sucesso", () => {
      before(() => {
        sinon
          .stub(CategoryRepository.prototype, "create")
          .resolves(fakeData.post.response);
        sinon.stub(Logger, "save").resolves();
        sinon.stub(JwtToken.prototype, "verify").returns({ id: 1 });
      });

      after(() => {
        (CategoryRepository.prototype.create as sinon.SinonStub).restore();
        (Logger.save as sinon.SinonStub).restore();
        (JwtToken.prototype.verify as sinon.SinonStub).restore();
      });

      it("deve criar uma nova categoria e retornar o status 201", async () => {
        const { status, body } = await chai
          .request(app)
          .post("/categories")
          .send(fakeData.post.request)
          .auth("token", { type: "bearer" });

        expect(status).to.be.equal(201);
        expect(body).to.be.an("object");
        expect(body).to.be.deep.equal(fakeData.post.response);
        expect(
          (Logger.save as sinon.SinonStub).calledWith(
            "category create() success"
          )
        ).to.be.true;
      });
    });

    describe("em caso de erro no banco de dados", () => {
      before(() => {
        sinon
          .stub(CategoryRepository.prototype, "create")
          .throws(new Error("db error"));
        sinon.stub(Logger, "save").resolves();
        sinon.stub(JwtToken.prototype, "verify").returns({ id: 1 });
      });

      after(() => {
        (CategoryRepository.prototype.create as sinon.SinonStub).restore();
        (Logger.save as sinon.SinonStub).restore();
        (JwtToken.prototype.verify as sinon.SinonStub).restore();
      });

      it("deve retornar a mensagem do erro e enviar status 500", async () => {
        const { status, body } = await chai
          .request(app)
          .post("/categories")
          .send(fakeData.post.request)
          .auth("token", { type: "bearer" });

        expect(status).to.be.equal(500);
        expect(body).to.have.property("error");
        expect(body.error.message).to.be.equal("db error");
        expect(
          (Logger.save as sinon.SinonStub).calledWith("category create() fail")
        ).to.be.true;
      });
    });
  });

  describe("PUT /categories/:id", () => {
    describe("caso a categoria exista", () => {
      before(() => {
        sinon
          .stub(CategoryRepository.prototype, "update")
          .resolves(fakeData.put.response);
        sinon
          .stub(CategoryRepository.prototype, "getById")
          .resolves(fakeData.put.mock);
        sinon.stub(Logger, "save").resolves();
        sinon.stub(JwtToken.prototype, "verify").returns({ id: 1 });
      });

      after(() => {
        (CategoryRepository.prototype.update as sinon.SinonStub).restore();
        (CategoryRepository.prototype.getById as sinon.SinonStub).restore();
        (Logger.save as sinon.SinonStub).restore();
        (JwtToken.prototype.verify as sinon.SinonStub).restore();
      });

      it("deve retornar a categoria atualizada e enviar status 200", async () => {
        const { status, body } = await chai
          .request(app)
          .put("/categories/2 ")
          .send(fakeData.put.request)
          .auth("token", { type: "bearer" });

        expect(status).to.be.equal(200);
        expect(body).to.be.an("object");
        expect(body).to.be.deep.equal(fakeData.put.response);
        expect(
          (Logger.save as sinon.SinonStub).calledWith(
            "category update() success"
          )
        ).to.be.true;
      });
    });

    describe("caso a categoria não exista", () => {
      before(() => {
        sinon
          .stub(CategoryRepository.prototype, "update")
          .resolves(fakeData.put.mock);

        sinon.stub(CategoryRepository.prototype, "getById").resolves(null);
        sinon.stub(JwtToken.prototype, "verify").returns({ id: 1 });

        sinon.stub(Logger, "save").resolves();
      });

      after(() => {
        (CategoryRepository.prototype.update as sinon.SinonStub).restore();
        (CategoryRepository.prototype.getById as sinon.SinonStub).restore();
        (Logger.save as sinon.SinonStub).restore();
        (JwtToken.prototype.verify as sinon.SinonStub).restore();
      });

      it("deve retornar a mensagem do erro e enviar status 404", async () => {
        const { status, body } = await chai
          .request(app)
          .put("/categories/9999")
          .send(fakeData.put.mock)
          .auth("token", { type: "bearer" });

        expect(status).to.be.equal(404);

        expect(body).to.have.property("error");

        expect(body.error.message).to.be.equal("category not found");
        expect(
          (Logger.save as sinon.SinonStub).calledWith("category update() fail")
        ).to.be.true;
      });
    });
  });

  describe("GET /categories/:id", () => {
    describe("em caso de sucesso", () => {
      before(() => {
        sinon
          .stub(CategoryRepository.prototype, "getById")
          .resolves(fakeData.getByIdMock);
        sinon.stub(Logger, "save").resolves();
        sinon.stub(JwtToken.prototype, "verify").returns({ id: 1 });
      });

      after(() => {
        (CategoryRepository.prototype.getById as sinon.SinonStub).restore();
        (Logger.save as sinon.SinonStub).restore();
        (JwtToken.prototype.verify as sinon.SinonStub).restore();
      });

      it("deve retornar um array de usuários e enviar status 200", async () => {
        const { status, body } = await chai
          .request(app)
          .get("/categories/2")
          .auth("token", { type: "bearer" });

        expect(status).to.be.equal(200);
        expect(body).to.be.an("object");
        expect(body).to.be.deep.equal(fakeData.getByIdMock);
        expect((Logger.save as sinon.SinonStub).calledWith("category getById() success"))
          .to.be.true;
      });
    });

    describe("em caso de erro no banco de dados", () => {
      before(() => {
        sinon
          .stub(CategoryRepository.prototype, "getById")
          .throws(new Error("db error"));
        sinon.stub(Logger, "save").resolves();
        sinon.stub(JwtToken.prototype, "verify").returns({ id: 1 });
      });

      after(() => {
        (CategoryRepository.prototype.getById as sinon.SinonStub).restore();
        (Logger.save as sinon.SinonStub).restore();
        (JwtToken.prototype.verify as sinon.SinonStub).restore();
      });

      it("deve retornar a mensagem do erro e enviar status 500", async () => {
        const { status, body } = await chai
          .request(app)
          .get("/categories/2")
          .auth("token", { type: "bearer" });

        expect(status).to.be.equal(500);
        expect(body).to.have.property("error");
        expect(body.error.message).to.be.equal("db error");
        expect((Logger.save as sinon.SinonStub).calledWith("category getById() fail")).to
          .be.true;
      });
    });
  });

  describe("DELETE /categories/:id", () => {
    describe("caso a categoria exista", () => {
      before(() => {
        sinon
          .stub(CategoryRepository.prototype, "delete")
          .resolves();
        sinon
          .stub(CategoryRepository.prototype, "getById")
          .resolves(fakeData.getByIdMock);
        sinon.stub(Logger, "save").resolves();
        sinon.stub(JwtToken.prototype, "verify").returns({ id: 1 });
      });

      after(() => {
        (CategoryRepository.prototype.delete as sinon.SinonStub).restore();
        (CategoryRepository.prototype.getById as sinon.SinonStub).restore();
        (Logger.save as sinon.SinonStub).restore();
        (JwtToken.prototype.verify as sinon.SinonStub).restore();
      });

      it("deve retornar uma mensagem de sucesso e enviar status 200", async () => {
        const { status, body } = await chai
          .request(app)
          .delete("/categories/2")
          .auth("token", { type: "bearer" });

        expect(status).to.be.equal(204);
        expect(body).to.be.an("object");
        expect((Logger.save as sinon.SinonStub).calledWith("category delete() success"))
          .to.be.true;
      });
    });

    describe("caso a categoria não exista", () => {
      before(() => {
        sinon
          .stub(CategoryRepository.prototype, "delete")
          .resolves();
        sinon.stub(CategoryRepository.prototype, "getById").resolves(null);
        sinon.stub(Logger, "save").resolves();
        sinon.stub(JwtToken.prototype, "verify").returns({ id: 1 });
      });

      after(() => {
        (CategoryRepository.prototype.delete as sinon.SinonStub).restore();
        (CategoryRepository.prototype.getById as sinon.SinonStub).restore();
        (Logger.save as sinon.SinonStub).restore();
        (JwtToken.prototype.verify as sinon.SinonStub).restore();
      });

      it("deve retornar a mensagem de erro e enviar status 404", async () => {
        const { status, body } = await chai
          .request(app)
          .delete("/categories/9999")
          .auth("token", { type: "bearer" });

        expect(status).to.be.equal(404);
        expect(body).to.have.property("error");
        expect(body.error.message).to.be.equal("category not found");
        expect((Logger.save as sinon.SinonStub).calledWith("category delete() fail")).to
          .be.true;
      });
    });
  });
});
