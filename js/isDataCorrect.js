export default function isDataCorrect(n, m, b, t, r) {
    if (!Number.isInteger(n) || n <= 0) {
        return "Ошибка: параметр 'n' должен быть целым числом больше 0.";
    }

    if (!Number.isInteger(m) || m <= 0) {
        return "Ошибка: параметр 'm' должен быть целым числом больше 0.";
    }

    if (!Number.isInteger(b) || b <= 0 || b > m) {
        return "Ошибка: параметр 'b' должен быть целым числом больше 0 и не больше 'm'.";
    }

    if (!Number.isInteger(t) || t <= 0) {
        return "Ошибка: параметр 't' должен быть целым числом больше 0.";
    }

    if (!Number.isInteger(r) || r <= 0) {
        return "Ошибка: параметр 'r' должен быть целым числом больше 0.";
    }

    return true;
}