export default interface Exception {
    code: string;
    message: string;
    stackTrace: Object | null;
}
