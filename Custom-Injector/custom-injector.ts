class UserService {
    sayHi() {
        console.log("Hey Buddy!!");
    }
}

class Component {
    constructor(public user: UserService) {}
}

// Angular Custom Injector
class Injector {
    private _container = new Map();
    
    constructor(private _providers: any[]) {
        this._providers.forEach(service => this._container.set(service, new service()))
    }

    getService(service: any) {
        const serviceInstance = this._container.get(service);
        if(!serviceInstance) {
            throw new Error('No Provider Found');
        }
        return serviceInstance
    }
}

// Implementation

const injector = new Injector([UserService])
const component = new Component(injector.getService(UserService));

component.user.sayHi();