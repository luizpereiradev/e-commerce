import * as jwt from 'jsonwebtoken';

export default class JwtToken {
  private secret = process.env.JWT_SECRET || 'what';

  sign(payload: {id: number}): string {
    return jwt.sign(payload, this.secret, { expiresIn: '1d' });
  }

  verify(token: string): any {
    return jwt.verify(token, this.secret);
  }
}
