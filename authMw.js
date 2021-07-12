const jwt = require("jsonwebtoken");

const APP_SECRET = "appsekret";
const USERNAME = "admin";
const PASSWORD = "sekret";

/**
 * Ten kod analizuje żadanie HTTP wykonane do usługi sieciowej typu RESTful i implementuje pewne podstawowe
 * funckje bezpieczeństwa. Jest to działający po stronie serwera kod.
 */

module.exports = function(req, res, next) {
    if (req.url == "/login" && req.method == "POST") {
        // req.body - zawiera pary klucz-wartość danych umieszczonych w treści żądania.
        if (req.body != null && req.body.name == USERNAME && req.body.password == PASSWORD) {
            // Generujemy token, który będzie aktywny przez 1h
            let token = jwt.sign({ data: USERNAME, expiresIn: "1h" }, APP_SECRET);
            res.json({ success: true, token: token }); //wysyła odpowiedź w formacie JSON
        } else {
            res.json({ success: false });
        }
        res.end();
        return;
    } else {
        // startWith() określa, czy url rozpoczyna się od podanego w parametrze łańcucha
        if ((req.url.startsWith("/products") && req.method != "GET") || (req.url.startsWith("/orders") && req.method != "POST")) {
            let token = req.headers["authorization"]; // nagłówek - authorization
            // Bearer - tokeny umożliwiające dostęp do zasobów chronionych przez OAuth 2.0
            if (token != null && token.startsWith("Bearer<")) {
                token = token.substring(7, token.length - 1); // zwraca podciąg obiektu string
                try {
                    jwt.verify(token, APP_SECRET); // weryfikacja tokenu
                    // pozwala nam przekazać kontrolę do następnej funkcji od tej, 
                    // w której się znajdujemy, co pozwala naszej aplikacji kontynuować
                    // wykonywanie zadań, jeśli odpowiedź została znaleziona lub jeśli wystąpił błąd,
                    // co zapobiegnie awarii naszego serwera.
                    next(); 
                    return;
                } catch (err) {}
            }
            // statusCode - ta właściwość kontroluje kod statusu, 
            // który zostanie wysłany do klienta, kiedy nagłówki zostaną opróżnione.
            res.statusCode = 401;
            res.end(); // kończy proces 
            return;
        }
        next();
    }
}