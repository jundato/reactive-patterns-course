export interface Observer {
    notify(data: any);
}

interface Subject {
    registerObserver(Obs: Observer);
    unregisterObserver(Obs: Observer);
    notifyObservers(data: any);
}

class EventBus implements Subject {

    private observers: Observer[] = [];

    registerObserver(Obs: Observer) {
        throw new Error("Method not implemented.");
    }
    unregisterObserver(Obs: Observer) {
        throw new Error("Method not implemented.");
    }
    notifyObservers(data: any) {
        throw new Error("Method not implemented.");
    }
}