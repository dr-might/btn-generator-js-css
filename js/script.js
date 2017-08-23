$(function() {   
    var increaseRadius = $('#increas-radius');
    var reduceRadius = $('#reduce-radius');
                
    var bgColorInput = $('#bg-color');
    var borderColorInput = $('#border-color'); 

    var create = $('.create');  
                
    var MAX_RADIUS = 20;
    var MIN_RADIUS = 0;
    
    
    // сделать чтоб работало под фф и ие, нормально работает только в хроме
    increaseRadius.on('click', function() {                    
        var currentRadius = $('.create').css('border-radius');
        var step = $('#step').val();
        var newRadius = (parseInt(currentRadius) + parseInt(step));
        
        if(newRadius > MAX_RADIUS){
            newRadius = MAX_RADIUS;
            increaseRadius.addClass('disabled');
        }
        if(newRadius > MIN_RADIUS){
            reduceRadius.removeClass('disabled');
        }
        
        create.css('border-radius', newRadius);
        updateResult(); 
    });

    reduceRadius.on('click', function() {
        var currentRadius = create.css('border-radius');
        var step = $('#step').val();
        var newRadius = (parseInt(currentRadius) - parseInt(step));
        
        if(newRadius <  MIN_RADIUS){
            newRadius =  MIN_RADIUS;
            reduceRadius.addClass('disabled');
        }
        if(newRadius <  MAX_RADIUS){
            increaseRadius.removeClass('disabled');
        }
        
        create.css('border-radius', newRadius);
        updateResult(); 
    });
                      
    bgColorInput.on('change', function() {                    
        var newColorBg = '#' + bgColorInput.val();                  
        create.css('background-color', newColorBg); 
        updateResult(); 
    });

    borderColorInput.on('change', function () {
        var newColorBorder = '#' + borderColorInput.val();
        create.css('border-color', newColorBorder);        
        updateResult(); 
    });

    var updateResult = function () {
        var borderWidth =  create.css('border');
        var borderRadius = create.css('border-radius');
        var bgColor = create.css('background-color');
        var borderColor = create.css('border-color');
        var codeResult = $('#code-result');
    
        codeResult.text(
            'border-width: ' +  borderWidth + ';\n' +
            '-moz-border-radius: ' + borderRadius + ';\n' + 
            '-webkit-border-radius: ' + borderRadius + ';\n' + 
            'border-radius: ' + borderRadius + ';\n' + 
            'background-color: ' + bgColor + ';\n' + 
            'border-color: ' + borderColor + ';');
    }

    updateResult();

});