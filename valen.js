$(function(){
    setTimeout(function(){
        $('#load').animate({'margin-left':'-200px','margin-top':'0'},500).fadeOut('fast',function(){
            $('#screen').fadeOut(100,function(){
                $('#tHappy').animate({'top':'270px'},500,function(){//happy
                    $(this).animate({'top':'230px'},100,function(){
                        $(this).animate({'top':'250px'},80,function(){//birthday
                            $('#t_NganCute').animate({'top':'290px'},500,function(){
                                $(this).animate({'top':'250px'},100,function(){
                                    $(this).animate({'top':'270px'},80,function(){//birthay
                                        $('#b').animate({'top':'280px'},500,function(){//b
                                            $(this).animate({'top':'240px'},100,function(){
                                                $(this).animate({'top':'260px'},50,function(){
                                                    $('#tHappy').animate({'left':'56px'},80)
                                                    $(this).animate({'left':'260px'},80,function(){//r
                                                        $('#r').animate({'top':'260px'},500,function(){
                                                            $('#t_NganCute').animate({'left':'375px'},80)
                                                            $(this).animate({'left':'355px'},80,function(){//i
                                                                $('#i').animate({'top':'260px'},500,function(){//t
                                                                    $('#t').animate({'top':'260px'},500)
                                                                    $('#t_NganCute').animate({'left':'406px'},500,function(){
                                                                        $('#h').animate({'top':'260px'},500)
                                                                        $('#t_NganCute').animate({'left':'445px'},500,function(){
                                                                            $('#d').animate({'top':'260px'},500)
                                                                            $('#t_NganCute').animate({'left':'493px'},500,function(){
                                                                                $('#a').animate({'top':'260px'},500)
                                                                                $('#t_NganCute').animate({'left':'530px'},500,function(){
                                                                                    $('#t_NganCute').animate({'left':'557px'},500,function(){
                                                                                        $('#y').css('top','260px').fadeIn('slow',function(){
                                                                                            $('#date').fadeIn('slow',function(){
                                                                                                setInterval(function(){
                                                                                                    $('#date').fadeOut('fast',function(){$(this).fadeIn()})
                                                                                                },2000)
                                                                                                setInterval(function(){
                                                                                                    var changeID=['t_NganCute','tHappy','b','r','i','t','h','d','a','y']
                                                                                                    $('#'+changeID[Math.floor(Math.random()*changeID.length)]).animate({'color':'rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')'},500)
                                                                                                    $('#'+changeID[Math.floor(Math.random()*changeID.length)]).animate({'color':'rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')'},600)
                                                                                                },1000)
                                                                                                $('#player').animate({'top':'30%'},500,function(){
                                                                                                    $(this).animate({'top':'20%'},200,function(){
                                                                                                        $(this).html("").delay(5000).animate({'top':'25%'},130,function(){
                                                                                                            $('.text').each(function(){
                                                                                                                $(this).stop().animate({'top':$(this).position().top-230},500,function(){
                                                                                                                    $('#player').css('z-index','1')
                                                                                                                    $('#menu').fadeIn(1500)
                                                                                                                })
                                                                                                            })
                                                                                                        })
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    },4000)
    //style Menu
    $('li').each(function(){
        $(this).css('background','url(imgs/'+$(this).attr('id')+'.png)')
    }).hover(function(){
        $(this).fadeTo(200,0.7)
    },function(){
        $(this).fadeTo(100,1)
        $('#tooltip').hide()
    }).mousemove(function(e){
        $('#tooltip').text($(this).text()).css({'top':e.clientY-20,'left':e.clientX-285,'display':'block'})//285 là chiều dài tooltip
    }).click(function(){
        $('.center').fadeOut().css('top','1200px',function(){$('#player').remove()})//remove hơi bị dư thừa
        if($(this).hasClass('link')){
            window.location.href=$(this).attr('lang')
        }else{
            var id=($(this).attr('id'))
            $('#'+id+'2').show(0).stop().animate({'top':'25%'},800)//số 2 rất quan trọng==>>sống chết chổ này
        }
    })
    //code thư
    $('#thu2 h3:first').click(function(){
        $(this).hide()
        $('#border_thu').animate({'height':'430px'},300)
        var content=$('#content_thu').html()
        i=0
        lengText=content.length
        setInterval(function(){//text chạy...chưa fix lỗi IE8
            if(i==lengText){
                $('#cursor1').hide()
            }else{
                var chay=content.substr(0,i)
                $('#main_thu').html(chay+'<img id="cursor1" src="imgs/but.png" width="13"/>')
                i++
            }
            
        },120)
    })
    //code quà

    //random chim
    $('body').append('<img style="position: fixed;z-index:100000000" alt="chim" src="imgs/chim.gif"/>')
    setInterval(function(){
        chimRan()
    },5000)
    function chimRan(){
        var $X=Math.ceil(Math.random()*$(window).width())
        var $Y=Math.ceil(Math.random()*$(window).height())
        $('img[alt=chim]').animate({'left':$X,'top':$Y},5000)
    }
})