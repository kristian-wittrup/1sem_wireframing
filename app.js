var x = function person(name, surname) {
    this.name = name;
    this.surname = surname;
    return name + " " + surname;
        var y = function imglogo(imgurl) {
        this.imgurl = imgurl;
        return imgurl;
      }

}


document.getElementById("logo").innerHTML = x("Helena", "Laurits");
document.getElementById("logo_img").src = person.y("");
