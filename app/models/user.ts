import * as firebase from "nativescript-plugin-firebase";

export interface User {
    id?: string;
    first_name: string;
    last_name?: string;
    description?: string;
    email?: string;
    picture?: string;
    address?: firebase.firestore.GeoPoint;
}