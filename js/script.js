
var counter ,
    icons = document.getElementsByClassName('loading-icons'),
    x = -1;

    setInterval (value,150);

        function value(){
          if (x < 5){
              x++;
              for (var i = 0; i < icons.length; i++) {
                icons[i].style.backgroundColor = "white";
                icons[x].style.backgroundColor = "green";
              };
      }else{
        x = -1;
      };

    };

    var wid = 0,
        val,
        Mypage = document.getElementById('page_content');


    function  login(){
      var user = document.getElementById('user_code'),
          userCode = user.value;
          Mylogin = document.getElementById('login_page');
          Mypage = document.getElementById('page_content');

          if (userCode == 32456){
              Mylogin.style.display= "none";
              progress();

          }else{
            alert ("Unknown Member");
          };
    };

    function progress(){
      setInterval(fun,40);
          function fun(){
              if(wid < 99){
                    wid ++;
                    val = `${wid}%`;
                    prog_par = `<div class="progress-par" id="progress_par">
                                      <span id="progress_value" style="width:${val}">${val}</span>
                                    </div>`;

                    document.getElementById("pro").innerHTML = prog_par;

              }else{
                clearInterval(this);
                Mypage.style.display= "block";
                document.getElementById("pro").style.display= "none";
              };

        }
    };
