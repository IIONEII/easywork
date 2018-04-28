document.writeln("<div class=\'first-banner\'>");
document.writeln("                    <div class=\'banner\'>");
document.writeln("                        <a href=\'#\'>");
document.writeln("                            <div class=\'banner-slide slide1 slide-active\'></div>");
document.writeln("                        </a>");
document.writeln("                        <a href=\'#\'>");
document.writeln("                            <div class=\'banner-slide slide2\'></div>");
document.writeln("                        </a>");
document.writeln("                        <a href=\'#\'>");
document.writeln("                            <div class=\'banner-slide slide3\'></div>");
document.writeln("                        </a>");
document.writeln("                    </div>");
document.writeln("                    <div class=\'dots\'>");
document.writeln("                        <span class=\'active\'></span>");
document.writeln("                        <span></span>");
document.writeln("                        <span></span>");
document.writeln("                    </div>");
document.writeln("                </div>");
document.writeln("                <script type=\'text/javascript\'>              ");
document.writeln("                    var timer=null,");
document.writeln("                        index=0,");
document.writeln("                        pics=$(\'.banner div\'),");
document.writeln("                        dots=$(\'.dots span\'),");
document.writeln("                        size=pics.length;");
document.writeln("                    function stopAutoPlay() {");
document.writeln("                        if(timer) clearInterval(timer);");
document.writeln("                    }");
document.writeln("                    function startAutoPlay() {");
document.writeln("                        timer=setInterval(function() {");
document.writeln("                            index++;");
document.writeln("                            if(index>=size) index=0;");
document.writeln("                            changeImg();");
document.writeln("                        },3000);");
document.writeln("                    }                            ");
document.writeln("                    function changeImg() {");
document.writeln("                        for(var i=0,len=dots.length;i<len;i++) {");
document.writeln("                            dots[i].className=\'\';");
document.writeln("                            pics[i].style.display=\'none\';");
document.writeln("                        }");
document.writeln("                        dots[index].className=\'active\';");
document.writeln("                        pics[index].style.display=\'block\';");
document.writeln("                    }                            ");
document.writeln("                    function slideImg() {");
document.writeln("                        var banner=$(\'.banner\'),");
document.writeln("                            main=$(\'.first-banner\');");
document.writeln("                        main.onmouseover=function() {");
document.writeln("                            stopAutoPlay();");
document.writeln("                        }");
document.writeln("                        main.onmouseout=function() {");
document.writeln("                            startAutoPlay();");
document.writeln("                        }");
document.writeln("                        main.onmouseout();                                ");
document.writeln("                        for(var i=0,len=dots.length;i<len;i++) {");
document.writeln("                            dots[i].id=i;");
document.writeln("                            dots[i].onclick=function() {");
document.writeln("                                index=this.id;");
document.writeln("                                changeImg();");
document.writeln("                            }");
document.writeln("                        }");
document.writeln("                    }");
document.writeln("                    slideImg();");
document.writeln("                </script>");