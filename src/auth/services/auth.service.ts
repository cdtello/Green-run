import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import * as firebaseConn from 'firebase/app';
import * as firebaseAuth from 'firebase/auth';
import { ExtractJwt, Strategy } from 'passport-jwt';

import firebaseConnection from '../firebase';
@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey:
                '-----BEGIN CERTIFICATE-----\nMIIDHDCCAgSgAwIBAgIIJ+GHHWX2upkwDQYJKoZIhvcNAQEFBQAwMTEvMC0GA1UE\nAwwmc2VjdXJldG9rZW4uc3lzdGVtLmdzZXJ2aWNlYWNjb3VudC5jb20wHhcNMjMw\nNTA2MDkzOTI5WhcNMjMwNTIyMjE1NDI5WjAxMS8wLQYDVQQDDCZzZWN1cmV0b2tl\nbi5zeXN0ZW0uZ3NlcnZpY2VhY2NvdW50LmNvbTCCASIwDQYJKoZIhvcNAQEBBQAD\nggEPADCCAQoCggEBAOT5hpJLZyOdFJH6trgprWe0IFCyHZgkP3hUn39z9nN5TfBN\njuLvHAH2eTnWqy8Gx8oNKSbPPlI86qwjYBd4d6G4MRmiJEbLmwGMW+CpggFt7kKD\nR0hLWfOBsmJURfGPDfL4EUeK5bQIdkCtCLgcJZHfeCH1VbIgGVdW7fVFSjYguzhB\n0iHPYDKsAMRiBAR7Tb6+dchl/YAeNa/NZMu9sTn3q6thqwBEMbGJXUmwTLxk+WXq\nEsV9ysfbymr8BZ5cVpezDNG2QHQnafZSQLCNmRLz1hdtYbtsUSgUl83eJhq0N7Xs\noOucJ4wFz+Ie9w7JbuRhhbme1aT5ID8yw/jF7gkCAwEAAaM4MDYwDAYDVR0TAQH/\nBAIwADAOBgNVHQ8BAf8EBAMCB4AwFgYDVR0lAQH/BAwwCgYIKwYBBQUHAwIwDQYJ\nKoZIhvcNAQEFBQADggEBAIz3A482Gn7PAm9wdU+lgSjhKiHtEWw9eR8XqzQ/OvyJ\n9afdbEoEjobM030OW339de6DofCU/MY+gn933L929+OYh/OXXY3FHZG/taWVlMha\nF9+UeOdSNKB6U8/Qvs43WvHIyDevjm55fBtGMgX4VOgaebUFi3kTdenIP8GPG9nm\nF6xIETSABp/HSBGK52aSDdkVrbkTrqDU6jB5jtPennKbCtv/yA6zzbXwsJWpemtH\nbJT2wChbSbZkaXeWtES+uj3xhGKzOd2i21nhQx5YjVeUnH3BR+w+T9gXrec0Nj3q\nV1uQ+JdL4k+6zrhgmBp5hwIfGanz/CJFBJ6S+Xqu9sg=\n-----END CERTIFICATE-----\n',
        });
    }

    async validate(payload) {
        console.log(payload);
        const user = {
            user_id: payload.user_id,
            email: payload.email,
        };
        return user;
    }
}

@Injectable()
export class AuthService {
    private connection: firebaseConn.FirebaseApp;
    private auth: firebaseAuth.Auth;

    constructor() {
        this.connection = firebaseConnection;
        this.auth = firebaseAuth.getAuth(this.connection);
    }

    async signup(email: string, password: string): Promise<string> {
        await firebaseAuth.createUserWithEmailAndPassword(
            this.auth,
            email,
            password,
        );
        return 'ok';
    }

    async login(email: string, password: string): Promise<string> {
        const result = await firebaseAuth.signInWithEmailAndPassword(
            this.auth,
            email,
            password,
        );
        const token = await result.user.getIdToken();
        console.log(this.connection);
        return token;
    }
}
