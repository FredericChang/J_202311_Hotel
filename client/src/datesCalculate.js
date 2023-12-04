export const ReservationDatesAndPrice = (startDate, endDate, hotelPrice, roomsPrice) => {
    const Msecond_per_day = 1000 *　86400;
    const DatesLength = (Math.abs(endDate?.getTime() - startDate?.getTime())) / Msecond_per_day;
    /// 1. 日期相減，取絕對值，得到天數
    /// 2. 日期相減，取絕對值，得到天數，再乘以房間價格
    const totalHotelPrice = DatesLength * hotelPrice || 0;
    const totalRoomsPrice = DatesLength * roomsPrice || 0;
    /// 3. 日期相減，取絕對值，得到天數，再乘以飯店價格
    /// 4. 日期相減，取絕對值，得到天數，再乘以飯店價格，再乘以房間價格
    return { DatesLength, totalHotelPrice, totalRoomsPrice };

}

export const ReservationDatesList = (startDate, endDate) => {
    const recordDates = new Date(startDate);
    const stopRecord = new Date(endDate);
    const datesList = [];
    while (recordDates <= stopRecord) {
        datesList.push(new Date(recordDates));
        recordDates.setDate(recordDates.getDate() + 1);
    }
    return datesList;
}