Template.meteormud_object.helpers({
  logObject: function () {
    console.log("meteormud_object");
    console.dir(this);
  },
  getTemplateName: function () {
    return Templates.getTemplateForObject(this);
  },
});
