"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = exports.AuthStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const firebaseAuth = require("firebase/auth");
const passport_jwt_1 = require("passport-jwt");
const firebase_1 = require("../firebase");
let AuthStrategy = class AuthStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: '-----BEGIN CERTIFICATE-----\nMIIDHTCCAgWgAwIBAgIJAODpzjE+LN0aMA0GCSqGSIb3DQEBBQUAMDExLzAtBgNV\nBAMMJnNlY3VyZXRva2VuLnN5c3RlbS5nc2VydmljZWFjY291bnQuY29tMB4XDTIz\nMDUxNDA5MzkzMFoXDTIzMDUzMDIxNTQzMFowMTEvMC0GA1UEAwwmc2VjdXJldG9r\nZW4uc3lzdGVtLmdzZXJ2aWNlYWNjb3VudC5jb20wggEiMA0GCSqGSIb3DQEBAQUA\nA4IBDwAwggEKAoIBAQCUjruTXSImR9swwpMLWi/Pve/QmAl5gTnwhK9XuzWXPu4f\nyrATdqcgpCGdx8fTsF81MbtVKqOR9O8MEXK4DCEYSnP7Vkblh5quzwDp3BoCJPaj\n96qL1bLg1uSC907l1B7L4l3dOwGxdra9EibAcQmWhHUpO3ap1Ull+454hVcV1Xq4\naY/Sqm5/LtH8TD2gwEPw2lRghFCxHMkzViipbzXDZVXIaaF3GF3Tw2dmKixZiV7u\nYK5oPy2Xp9VlclW8QTqzKgQtMrHXiRMiyIa0Cyl2p7yjY8tc6ViFIowBgDY+HDfE\nHVje1QJUXHWjzBuSLzgqgcvNmK1rfmJjBqb+6YznAgMBAAGjODA2MAwGA1UdEwEB\n/wQCMAAwDgYDVR0PAQH/BAQDAgeAMBYGA1UdJQEB/wQMMAoGCCsGAQUFBwMCMA0G\nCSqGSIb3DQEBBQUAA4IBAQBW3v+AG32GpYyoY/eJififiiZlDYvaGqx7C5epUVru\nm7W3mFCMRyduzUd/U6xHaq9wGfqViFSpueXBfkFzl1H4XyHZll6Q9oYacygBSksE\nC7YqmgSsjmCeC+j2fE1kftfeovrwKyNav5MvNefFlXkkkZRP6HIl8u+ra/ZGnTup\nBwl0ALHLv5FkWRe+2ujAniUmfonBBQ1EYEzPK51X1BACW49OOL/HzilhpzhTp0ZS\nWpOdZ28JC2m3pWOL7WXiqyDujaQ6xG5rj+sUosM95uuOukY7HJhmWC1aojdGQl9z\n35+8kEk0EG9C+AgN4dIPtWtxeC1NdnjnF5cRIAra8aiq\n-----END CERTIFICATE-----\n',
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
};
AuthStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AuthStrategy);
exports.AuthStrategy = AuthStrategy;
let AuthService = class AuthService {
    constructor() {
        this.connection = firebase_1.default;
        this.auth = firebaseAuth.getAuth(this.connection);
    }
    async signup(authDto) {
        await firebaseAuth.createUserWithEmailAndPassword(this.auth, authDto.email, authDto.password);
        return 'ok';
    }
    async login(authDto) {
        const result = await firebaseAuth.signInWithEmailAndPassword(this.auth, authDto.email, authDto.password);
        const token = await result.user.getIdToken();
        return token;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map