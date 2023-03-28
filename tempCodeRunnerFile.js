function calculateVolumeAndArea(length) {
    if (typeof(length) == 'string' || length <= 0) {
        console.log("При вычислении произошла ошибка");
    } else {
        console.log("Объем куба:",length * length * length,",площадь всей поверхности:",6*length*length);
    }
}
calculateVolumeAndArea(15);