const express = require('express');
const path = require('path');

const app = express();
const PORT = 80; // פורט 80 מאפשר גישה ישירה ללא ציון פורט בכתובת (http://192.168.1.15)
// אם פורט 80 תפוס או דורש הרשאות מנהל, אפשר להשתמש בפורט 3000 למשל.

// אפשרות א': שימוש בפקודת res.download המיועדת להורדת קבצים
app.get('/tv.m3u8', (req, res) => {
    const filePath = path.join(__dirname, 'tv.m3u8');
    res.download(filePath, 'tv.m3u8', (err) => {
        if (err) {
            console.error("שגיאה בהורדת הקובץ:", err);
            res.status(404).send('הקובץ לא נמצא');
        }
    });
});

app.get('/movies.m3u8', (req, res) => {
    const filePath = path.join(__dirname, 'movies.m3u8');
    res.download(filePath, 'movies.m3u8', (err) => {
        if (err) {
            console.error("שגיאה בהורדת הקובץ:", err);
            res.status(404).send('הקובץ לא נמצא');
        }
    });
});

app.get('/series.m3u8', (req, res) => {
    const filePath = path.join(__dirname, 'series.m3u8');
    res.download(filePath, 'series.m3u8', (err) => {
        if (err) {
            console.error("שגיאה בהורדת הקובץ:", err);
            res.status(404).send('הקובץ לא נמצא');
        }
    });
});

// הפעלת השרת על ה-IP המקומי המבוקש
app.listen(PORT, '192.168.1.149', () => {
    console.log('השרת רץ בכתובת: http://192.168.1.149');
});

// 10005394