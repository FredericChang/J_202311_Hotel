import mongoose from 'mongoose'
const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true }, //紀錄誰下這個訂單的
    hotelId: { type: String, required: true }, //紀錄這個訂單的飯店編號
    //一次紀錄一個訂房的房間，但可以一次下訂許多的房間
    RoomNumberId: [
      {
        //紀錄這個訂單的房間編號
        type: String,
        required: true,
      },
    ],
    ReservationDates: [
      {
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
      },
    ],
    totalPrice: { type: Number, required: true }, //總共下訂金額
    status: { type: String, default: '待確認訂單' }, //這個是給後台看得狀態讓之後訂單好管理
    options: [
      {
        //條件設置就紀錄我們的人數條件
        adult: { type: Number, default: 1 },
        children: { type: Number, default: 0 },
        rooms: { type: Number, default: 1 },
      },
    ],
  },
  { timestamps: true }
)
export default mongoose.model('Order', OrderSchema)

// 這邊我們的order model會要包含使用者id、飯店/房間id、住宿的時間區間、總價格與人數，這邊選擇將飯店、房間編號id都紀錄進去，當然也可以只記房間編號id，並後台如果需要觀看可以在往上回朔查詢母資料hotelid 與roomId，但為了方便我們就選擇一次紀錄，在後台上如果需要顯示，就可以一次叫出來資料id來觀看飯店資料等資訊。
// 並處理我們的app.get所延伸的ApiRoutes與routesController
