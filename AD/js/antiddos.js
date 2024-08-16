// جلوگیری از حملات DDoS با محدود کردن تعداد درخواست‌ها
let requestCount = 0;
const maxRequests = 100; // حداکثر تعداد درخواست‌ها در یک بازه زمانی

setInterval(() => {
    requestCount = 0; // بازنشانی تعداد درخواست‌ها هر 10 ثانیه
}, 10000);

window.addEventListener('load', () => {
    requestCount++;
    if (requestCount > maxRequests) {
        alert('تعداد درخواست‌ها بیش از حد مجاز است.');
        // می‌توانید کارهای دیگری مانند مسدود کردن IP را نیز انجام دهید
    }
});