var times = {};

var timepicker = new TimePicker(['time1', 'time2','time3','time4'], {
  theme: 'dark',
  lang: 'en'
});

timepicker.on('change', function(evt){
  var value = (evt.hour || '00') + ':' + (evt.minute || '00');
  evt.element.value = value;
  
  var id = evt.element.id;
  times[id] = value;
});