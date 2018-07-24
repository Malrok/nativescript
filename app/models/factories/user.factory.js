"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserFactory = /** @class */ (function () {
    function UserFactory() {
    }
    UserFactory.fromDocument = function (doc) {
        var user = {
            id: doc.id,
            first_name: doc.data().first_name,
            last_name: doc.data().last_name,
            description: doc.data().description,
            email: doc.data().email,
            picture: doc.data().picture,
            address: doc.data().address
        };
        return user;
    };
    UserFactory.toDocument = function (formGroup) {
        var user = {
            id: formGroup.controls.id.value,
            first_name: formGroup.controls.first_name.value,
            last_name: formGroup.controls.last_name.value,
            description: formGroup.controls.description.value,
            email: formGroup.controls.email.value,
            picture: formGroup.controls.picture.value,
            address: formGroup.controls.address.value
        };
        return user;
    };
    UserFactory.newInstance = function () {
        return {
            id: '',
            first_name: '',
            last_name: '',
            description: '',
            email: '',
            picture: '',
            address: null
        };
    };
    return UserFactory;
}());
exports.UserFactory = UserFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUE7SUFBQTtJQXdDQSxDQUFDO0lBdENpQix3QkFBWSxHQUExQixVQUEyQixHQUF3QztRQUMvRCxJQUFNLElBQUksR0FBUztZQUNmLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRTtZQUNWLFVBQVUsRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVTtZQUNqQyxTQUFTLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVM7WUFDL0IsV0FBVyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXO1lBQ25DLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSztZQUN2QixPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU87WUFDM0IsT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPO1NBQzlCLENBQUM7UUFDRixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFYSxzQkFBVSxHQUF4QixVQUF5QixTQUFvQjtRQUN6QyxJQUFNLElBQUksR0FBUztZQUNmLEVBQUUsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLO1lBQy9CLFVBQVUsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLO1lBQy9DLFNBQVMsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLO1lBQzdDLFdBQVcsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLO1lBQ2pELEtBQUssRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLO1lBQ3JDLE9BQU8sRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLO1lBQ3pDLE9BQU8sRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLO1NBQzVDLENBQUM7UUFDRixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFYSx1QkFBVyxHQUF6QjtRQUNJLE1BQU0sQ0FBQztZQUNILEVBQUUsRUFBRSxFQUFFO1lBQ04sVUFBVSxFQUFFLEVBQUU7WUFDZCxTQUFTLEVBQUUsRUFBRTtZQUNiLFdBQVcsRUFBRSxFQUFFO1lBQ2YsS0FBSyxFQUFFLEVBQUU7WUFDVCxPQUFPLEVBQUUsRUFBRTtZQUNYLE9BQU8sRUFBRSxJQUFJO1NBQ2hCLENBQUM7SUFDTixDQUFDO0lBRUwsa0JBQUM7QUFBRCxDQUFDLEFBeENELElBd0NDO0FBeENZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3VzZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyRmFjdG9yeSB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBmcm9tRG9jdW1lbnQoZG9jOiBmaXJlYmFzZS5maXJlc3RvcmUuRG9jdW1lbnRTbmFwc2hvdCk6IFVzZXIge1xyXG4gICAgICAgIGNvbnN0IHVzZXI6IFVzZXIgPSB7XHJcbiAgICAgICAgICAgIGlkOiBkb2MuaWQsXHJcbiAgICAgICAgICAgIGZpcnN0X25hbWU6IGRvYy5kYXRhKCkuZmlyc3RfbmFtZSxcclxuICAgICAgICAgICAgbGFzdF9uYW1lOiBkb2MuZGF0YSgpLmxhc3RfbmFtZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRvYy5kYXRhKCkuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIGVtYWlsOiBkb2MuZGF0YSgpLmVtYWlsLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiBkb2MuZGF0YSgpLnBpY3R1cmUsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGRvYy5kYXRhKCkuYWRkcmVzc1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0b0RvY3VtZW50KGZvcm1Hcm91cDogRm9ybUdyb3VwKTogVXNlciB7XHJcbiAgICAgICAgY29uc3QgdXNlcjogVXNlciA9IHtcclxuICAgICAgICAgICAgaWQ6IGZvcm1Hcm91cC5jb250cm9scy5pZC52YWx1ZSxcclxuICAgICAgICAgICAgZmlyc3RfbmFtZTogZm9ybUdyb3VwLmNvbnRyb2xzLmZpcnN0X25hbWUudmFsdWUsXHJcbiAgICAgICAgICAgIGxhc3RfbmFtZTogZm9ybUdyb3VwLmNvbnRyb2xzLmxhc3RfbmFtZS52YWx1ZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGZvcm1Hcm91cC5jb250cm9scy5kZXNjcmlwdGlvbi52YWx1ZSxcclxuICAgICAgICAgICAgZW1haWw6IGZvcm1Hcm91cC5jb250cm9scy5lbWFpbC52YWx1ZSxcclxuICAgICAgICAgICAgcGljdHVyZTogZm9ybUdyb3VwLmNvbnRyb2xzLnBpY3R1cmUudmFsdWUsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6IGZvcm1Hcm91cC5jb250cm9scy5hZGRyZXNzLnZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG5ld0luc3RhbmNlKCk6IFVzZXIge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiAnJyxcclxuICAgICAgICAgICAgZmlyc3RfbmFtZTogJycsXHJcbiAgICAgICAgICAgIGxhc3RfbmFtZTogJycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgYWRkcmVzczogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG59Il19