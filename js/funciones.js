            $(function(){
                $('#example0').Chocolat({
                    imageSize: 'contain'
                });

                $('#example1').Chocolat({
                    loop           : true,
                    imageSize     : 'cover',
                    overlayOpacity : 0.9
                });

                $('#example2').Chocolat({
                    container      : '#container1',
                    imageSize     : 'contain',
                    loop           : true,
                })

                $('#example3').Chocolat({
                    container      : '#container2',
                    imageSize     : 'cover',
                })
                var instance = $('#container3').Chocolat({
                    setTitle : 'set title',
                    loop: true,
                    images : [
                        {src : 'demo-images/1.jpg', title : 'caption 1'},
                        {src : 'demo-images/6.jpg', title : 'caption 2'},
                        {src : 'demo-images/8.jpg', title : 'caption 3'},
                    ],
                    imageSize : 'contain',
                    container : '#container3'
                }).data('chocolat');

                $('.api-open').on('click', function(e) {
                    e.preventDefault()

                    console.log('open start');
                    var def = instance.api().open()

                    def.done(function(){
                        console.log('open done');
                    })
                })
                $('.api-close').on('click', function(e) {
                    e.preventDefault()

                    console.log('close start');
                    var def = instance.api().close()

                    def.done(function(){
                        console.log('close done');
                    })
                })
                $('.api-prev').on('click', function(e) {
                    e.preventDefault()

                    console.log('prev start');
                    var def = instance.api().prev()

                    def.done(function(){
                        console.log('prev done');
                    })
                })
                $('.api-next').on('click', function(e) {
                    e.preventDefault()

                    console.log('next start');
                    var def = instance.api().next()

                    def.done(function(){
                        console.log('next done');
                    })
                })

                $('.api-cover').on('click', function(e) {
                    e.preventDefault()

                    console.log('cover mode start')
                    instance.api().set('imageSize', 'cover')
                    var def = instance.api().place()

                    def.done(function(){
                        console.log('cover mode done');
                    });
                });

                $('.api-contain').on('click', function(e) {
                    e.preventDefault();

                    console.log('contain mode start');
                    instance.api().set('imageSize', 'contain');
                    var def = instance.api().place();

                    def.done(function(){
                        console.log('contain mode done');
                    });
                });
            });
