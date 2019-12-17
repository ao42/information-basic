function zikan(){
  var week = document.getElementById("week").value;
  var period = document.getElementById("period").value;
    ti = get(week,period);
    alert (ti);
}

function get(week,period){
  switch (week) {
    case "mon":
      switch(period){
          case "4":
          return ("情報基礎")
          break;

          case "5":
          return ("情報基礎")
          break;

          default:
          return ("授業は登録されていません")
      }
    break;

    case "tue":
      switch(period){
          case "1":
          return ("フランス語")
          break;

          case "2":
          return ("ファイナンス論")
          break;

          case "3":
          return ("古典と現代")
          break;

          default:
          return ("授業は登録されていません")
      }
    break;

    case "wed":
      switch(period){
          case "2":
          return ("フランス語")
          break;

          case "3":
          return ("統計基礎")
          break;

          default:
          return ("授業は登録されていません")
      }
    break;

    case "thu":
      switch(period){
          case "1":
          return ("フランス語")
          break;

          case "2":
          return ("データドリブン")
          break;

          case "3":
          return ("インターネット")
          break;

          case "4":
          return ("村井研")
          break;

          case "5":
          return ("村井研")
          break;

          default:
          return ("授業は登録されていません")
      }
    break;

    case"fri":
      switch(period){
          case "2":
          return ("フランス語")
          break;

          case "3":
          return ("パターン情報")
          break;

          default:
          return ("授業は登録されていません")
      }
    break;

    default:
    return ("何もしないという仕事が入っております")
    }
  }
