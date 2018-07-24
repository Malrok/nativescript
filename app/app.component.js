"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    // Your TypeScript logic goes here
    AppComponent.prototype.ngOnInit = function () {
        firebase.init({
            // Optionally pass in properties for database, authentication and cloud messaging,
            // see their respective docs.
            persist: false,
            storageBucket: 'gs://cross-platform-test.appspot.com',
            onAuthStateChanged: function (data) {
                console.log(JSON.stringify(data));
                // if (data.loggedIn) {
                //   AuthService.uid = data.user.uid;
                // }
            }
        }).then(function (instance) {
            console.log("firebase.init done");
        }, function (error) {
            console.log("firebase.init error: " + error);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n    <ActionBar title=\"My App\" class=\"action-bar\"></ActionBar>\n    <router-outlet></router-outlet>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsdURBQXlEO0FBU3pEO0lBQUE7SUF3QkEsQ0FBQztJQXZCQyxrQ0FBa0M7SUFFbEMsK0JBQVEsR0FBUjtRQUNFLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDWixrRkFBa0Y7WUFDbEYsNkJBQTZCO1lBQzdCLE9BQU8sRUFBRSxLQUFLO1lBQ2QsYUFBYSxFQUFFLHNDQUFzQztZQUNyRCxrQkFBa0IsRUFBRSxVQUFDLElBQVM7Z0JBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyx1QkFBdUI7Z0JBQ3ZCLHFDQUFxQztnQkFDckMsSUFBSTtZQUNOLENBQUM7U0FDRixDQUFDLENBQUMsSUFBSSxDQUNMLFVBQUEsUUFBUTtZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNwQyxDQUFDLEVBQ0QsVUFBQSxLQUFLO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBd0IsS0FBTyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBdkJVLFlBQVk7UUFQeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSw4R0FHVDtTQUNGLENBQUM7T0FDVyxZQUFZLENBd0J4QjtJQUFELG1CQUFDO0NBQUEsQUF4QkQsSUF3QkM7QUF4Qlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPEFjdGlvbkJhciB0aXRsZT1cIk15IEFwcFwiIGNsYXNzPVwiYWN0aW9uLWJhclwiPjwvQWN0aW9uQmFyPlxuICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLyBZb3VyIFR5cGVTY3JpcHQgbG9naWMgZ29lcyBoZXJlXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgZmlyZWJhc2UuaW5pdCh7XG4gICAgICAvLyBPcHRpb25hbGx5IHBhc3MgaW4gcHJvcGVydGllcyBmb3IgZGF0YWJhc2UsIGF1dGhlbnRpY2F0aW9uIGFuZCBjbG91ZCBtZXNzYWdpbmcsXG4gICAgICAvLyBzZWUgdGhlaXIgcmVzcGVjdGl2ZSBkb2NzLlxuICAgICAgcGVyc2lzdDogZmFsc2UsXG4gICAgICBzdG9yYWdlQnVja2V0OiAnZ3M6Ly9jcm9zcy1wbGF0Zm9ybS10ZXN0LmFwcHNwb3QuY29tJyxcbiAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZDogKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgIC8vIGlmIChkYXRhLmxvZ2dlZEluKSB7XG4gICAgICAgIC8vICAgQXV0aFNlcnZpY2UudWlkID0gZGF0YS51c2VyLnVpZDtcbiAgICAgICAgLy8gfVxuICAgICAgfVxuICAgIH0pLnRoZW4oXG4gICAgICBpbnN0YW5jZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpO1xuICAgICAgfSxcbiAgICAgIGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYGZpcmViYXNlLmluaXQgZXJyb3I6ICR7ZXJyb3J9YCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxufVxuIl19