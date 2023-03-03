export const imgValidation = (file?: File) => {
    if (!file?.size) {
        alert("파일이 존재하지 않습니다!")
        return false
    }
    if (file?.size > 5 * 1024 * 1024) {
        alert("사진 용량이 너무 큽니다! (제한: 5MB)")
        return false
    }
    if (
        !file?.type.includes("image/jpeg") &&
        !file?.type.includes("image/jpg") &&
        !file?.type.includes("image/png")
    ) {
        alert("사진만 업로드 가능합니다! (제한: jpeg, jpg, png)")
        return false
    }
    return true
}
