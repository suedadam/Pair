// set up player normally
    $f("player1", "http://releases.flowplayer.org/swf/flowplayer-3.2.18.swf", {
 
        // clip properties common to all playlist entries
        clip: {
            baseUrl: 'http://stream.flowplayer.org',
            subTitle: 'from blib.tv video sharing site',
            time: '20 sec'
        },
 
        // our playlist
        playlist: [
            {
                url: 'KimAronson-TwentySeconds59483.flv',
                title: 'Palm trees and the sun'
            },
            {
                url: 'KimAronson-TwentySeconds58192.flv',
                title: 'Happy feet in a car'
            },
            {
                url: 'KimAronson-TwentySeconds63617.flv',
                title: 'People jogging'
            }
        ],
 
        // show playlist buttons in controlbar
        plugins: {
            controls: {
                playlist: true
            }
        }
    });
 

    // here comes the magic plugin. It uses first div.clips element as the
    // root for as playlist entries. loop parameter makes clips play
    // from the beginning to the end.
 
    $f("player1").playlist("div.clips:first", {loop:true});