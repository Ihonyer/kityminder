KityMinder.registerModule( "RenderModule", function () {

    var DrawShapeCommand = kity.createClass( "DrawShapeCommand", {
        base: Command,
        execute: function ( km, config ) {

        }
    } );

    return {
        "commands": {
            //todo:command字典，name－action  键值对模式编写
            "drawrect": DrawShapeCommand
        },

        "events": {
            //todo:事件响应函数绑定列表,事件名-响应函数  键值对模式编写
            "click": function ( e ) {

            },
            "keydown keyup": function ( e ) {

            }
        }
    };
} );