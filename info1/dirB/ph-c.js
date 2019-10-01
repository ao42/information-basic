var pics_src = new Array("../image/cat.jpg","../image/one.jpg","../image/oko.jpg");
            var num = 0;

            function go_forward(){
                if (num == 2) {
                    num = 0;
                }
                else {
                    num ++;
                }
                document.getElementById("mypic").src=pics_src[num];
              }


            function go_back(){
                if (num == 0) {
                    num = 2;
                }
                else {
                    num --;
                }
                document.getElementById("mypic").src=pics_src[num];
              }


              function sc(){
                  if (num == 0) {
                      num = 1;
                  }
                  else {
                      num --;
                  }
                  document.getElementById("mypic").src=pics_src[num];
                }
