"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var rxjs_1 = require("rxjs");
var user_factory_1 = require("~/models/factories/user.factory");
var FirestoreProvider = /** @class */ (function () {
    function FirestoreProvider(ngZone) {
        this.ngZone = ngZone;
    }
    FirestoreProvider.prototype.getAllUsers = function () {
        var _this = this;
        var usersData = [];
        return rxjs_1.Observable.create(function (subscriber) {
            firebase.firestore.collection('users').limit(10).onSnapshot(function (snapshot) {
                snapshot.forEach(function (user) {
                    usersData.push(user_factory_1.UserFactory.fromDocument(user));
                    _this.ngZone.run(function () {
                        subscriber.next(usersData);
                    });
                });
            });
        });
    };
    FirestoreProvider.prototype.getUserById = function (id) {
        return firebase.firestore.doc("users/" + id);
    };
    FirestoreProvider = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], FirestoreProvider);
    return FirestoreProvider;
}());
exports.FirestoreProvider = FirestoreProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZXN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlyZXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1EO0FBQ25ELHVEQUF5RDtBQUN6RCw2QkFBa0M7QUFDbEMsZ0VBQThEO0FBSTlEO0lBRUUsMkJBQ1UsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDcEIsQ0FBQztJQUVMLHVDQUFXLEdBQVg7UUFBQSxpQkFhQztRQVpDLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVuQixNQUFNLENBQUMsaUJBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQSxVQUFVO1lBQ2pDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBQyxRQUEwQztnQkFDckcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7b0JBQ25CLFNBQVMsQ0FBQyxJQUFJLENBQUMsMEJBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDL0MsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7d0JBQ2QsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDN0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHVDQUFXLEdBQVgsVUFBWSxFQUFVO1FBQ3BCLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFTLEVBQUksQ0FBQyxDQUFBO0lBQzlDLENBQUM7SUF2QlUsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7eUNBSU8sYUFBTTtPQUhiLGlCQUFpQixDQWtDN0I7SUFBRCx3QkFBQztDQUFBLEFBbENELElBa0NDO0FBbENZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFVzZXJGYWN0b3J5IH0gZnJvbSAnfi9tb2RlbHMvZmFjdG9yaWVzL3VzZXIuZmFjdG9yeSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnfi9tb2RlbHMvdXNlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaXJlc3RvcmVQcm92aWRlciB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZVxuICApIHsgfVxuXG4gIGdldEFsbFVzZXJzKCk6IE9ic2VydmFibGU8QXJyYXk8VXNlcj4+IHtcbiAgICB2YXIgdXNlcnNEYXRhID0gW107XG5cbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jcmVhdGUoc3Vic2NyaWJlciA9PiB7XG4gICAgICBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbigndXNlcnMnKS5saW1pdCgxMCkub25TbmFwc2hvdCgoc25hcHNob3Q6IGZpcmViYXNlLmZpcmVzdG9yZS5RdWVyeVNuYXBzaG90KSA9PiB7XG4gICAgICAgIHNuYXBzaG90LmZvckVhY2godXNlciA9PiB7XG4gICAgICAgICAgdXNlcnNEYXRhLnB1c2goVXNlckZhY3RvcnkuZnJvbURvY3VtZW50KHVzZXIpKTtcbiAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHVzZXJzRGF0YSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRVc2VyQnlJZChpZDogc3RyaW5nKTogZmlyZWJhc2UuZmlyZXN0b3JlLkRvY3VtZW50UmVmZXJlbmNlIHtcbiAgICByZXR1cm4gZmlyZWJhc2UuZmlyZXN0b3JlLmRvYyhgdXNlcnMvJHtpZH1gKVxuICB9XG5cbiAgLy8gc2F2ZVVzZXIoZm9ybUdyb3VwOiBGb3JtR3JvdXApOiBQcm9taXNlPHZvaWQ+IHtcbiAgLy8gICBsZXQgaWQgPSBmb3JtR3JvdXAuY29udHJvbHMuaWQudmFsdWU7XG4gIC8vICAgaWYgKCFpZCkge1xuICAvLyAgICAgaWQgPSBmaXJlYmFzZS5maXJlc3RvcmUuY3JlYXRlSWQoKTtcbiAgLy8gICAgIGZvcm1Hcm91cC5jb250cm9scy5pZC5wYXRjaFZhbHVlKGlkKTtcbiAgLy8gICB9O1xuICAvLyAgIHJldHVybiBmaXJlYmFzZS5maXJlc3RvcmUuZG9jPFVzZXI+KGB1c2Vycy8ke2lkfWApLnNldChVc2VyRmFjdG9yeS50b0RvY3VtZW50KGZvcm1Hcm91cCkpO1xuICAvLyB9XG5cbn1cbiJdfQ==