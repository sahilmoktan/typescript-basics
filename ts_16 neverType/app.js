// never type doesn't return anything like void
function tryReturn() {
}
//but even though we are not returning anything on tryReturn it returns undefine that's why it is void
function apiError(msg, code) {
    throw { message: msg, apiCode: code };
}
console.log(apiError('server error', 500));
