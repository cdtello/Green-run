import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import * as firebaseConn from 'firebase/app';
import * as firebaseAuth from 'firebase/auth';
import { ExtractJwt, Strategy } from 'passport-jwt';

import firebaseConnection from '../firebase';
import { AuthDto } from '../dtos/auth.dto';
@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey:
                '-----BEGIN CERTIFICATE-----\nMIIDHTCCAgWgAwIBAgIJAODpzjE+LN0aMA0GCSqGSIb3DQEBBQUAMDExLzAtBgNV\nBAMMJnNlY3VyZXRva2VuLnN5c3RlbS5nc2VydmljZWFjY291bnQuY29tMB4XDTIz\nMDUxNDA5MzkzMFoXDTIzMDUzMDIxNTQzMFowMTEvMC0GA1UEAwwmc2VjdXJldG9r\nZW4uc3lzdGVtLmdzZXJ2aWNlYWNjb3VudC5jb20wggEiMA0GCSqGSIb3DQEBAQUA\nA4IBDwAwggEKAoIBAQCUjruTXSImR9swwpMLWi/Pve/QmAl5gTnwhK9XuzWXPu4f\nyrATdqcgpCGdx8fTsF81MbtVKqOR9O8MEXK4DCEYSnP7Vkblh5quzwDp3BoCJPaj\n96qL1bLg1uSC907l1B7L4l3dOwGxdra9EibAcQmWhHUpO3ap1Ull+454hVcV1Xq4\naY/Sqm5/LtH8TD2gwEPw2lRghFCxHMkzViipbzXDZVXIaaF3GF3Tw2dmKixZiV7u\nYK5oPy2Xp9VlclW8QTqzKgQtMrHXiRMiyIa0Cyl2p7yjY8tc6ViFIowBgDY+HDfE\nHVje1QJUXHWjzBuSLzgqgcvNmK1rfmJjBqb+6YznAgMBAAGjODA2MAwGA1UdEwEB\n/wQCMAAwDgYDVR0PAQH/BAQDAgeAMBYGA1UdJQEB/wQMMAoGCCsGAQUFBwMCMA0G\nCSqGSIb3DQEBBQUAA4IBAQBW3v+AG32GpYyoY/eJififiiZlDYvaGqx7C5epUVru\nm7W3mFCMRyduzUd/U6xHaq9wGfqViFSpueXBfkFzl1H4XyHZll6Q9oYacygBSksE\nC7YqmgSsjmCeC+j2fE1kftfeovrwKyNav5MvNefFlXkkkZRP6HIl8u+ra/ZGnTup\nBwl0ALHLv5FkWRe+2ujAniUmfonBBQ1EYEzPK51X1BACW49OOL/HzilhpzhTp0ZS\nWpOdZ28JC2m3pWOL7WXiqyDujaQ6xG5rj+sUosM95uuOukY7HJhmWC1aojdGQl9z\n35+8kEk0EG9C+AgN4dIPtWtxeC1NdnjnF5cRIAra8aiq\n-----END CERTIFICATE-----\n',
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

    async signup(authDto: AuthDto): Promise<string> {
        await firebaseAuth.createUserWithEmailAndPassword(
            this.auth,
            authDto.email,
            authDto.password,
        );
        return 'ok';
    }

    async login(authDto: AuthDto): Promise<string> {
        const result = await firebaseAuth.signInWithEmailAndPassword(
            this.auth,
            authDto.email,
            authDto.password,
        );
        const token = await result.user.getIdToken();
        return token;
    }
}
