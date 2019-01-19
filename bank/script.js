//business logic
var balance;
function Contact(first,last,deposit) {
    this.first = first;
    this.last = last;
    deposit=deposit
  }
  
  // function Address(email, date, deposit) {
  //   this.email = email;
  //   this.date = date;
  //   this.ba bank account;
  // }
  
  Contact.prototype.fullName = function() {
    return this.first + " " + this.last;
  }
  

  
  // user interface logic
  $(document).ready(function() {
  
    $("form#new-contact").submit(function(event) {
      event.preventDefault();
     var inputtedFirstName = $("input#fname").val();
      var inputtedLastName = $("input#sname").val();
      var inputtedDeposit=parseInt($("input#bank").val());
      var newContact = new Contact(inputtedFirstName, inputtedLastName,inputtedDeposit);
  
     $("#left").show();
     $("form#new-contact").hide();
    $("#show-contact").show();
    $(".first-name").text(newContact.fullName());
    $(".deposit").text(newContact.deposit)

    $("#deposit").click(function(){
      var DEposit=parseInt($("input#depos").val());
      balance= deposit + DEposit
console.log(balance)

      $("#total-balance").show();
      $(".fullname").text(newContact.fullName())
      $(".total-balance").text(balance);

    })

    $("#withdraw").click(function(){
      var WIthdraw=parseInt($("input#withd").val());
      balance= deposit - WIthdraw
console.log(balance)

      $("#total-balance").show();
      $(".fullname").text(newContact.fullName())
      $(".total-balance").text(balance);

    })
  
    //   $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
  
    //   $(".contact").last().click(function() {
    //     $("#show-contact").show();
    //     $("#show-contact h2").text(newContact.fullName());
    //     $(".first-name").text(newContact.firstName);
    //     $(".last-name").text(newContact.lastName);
    //     $("ul#addresses").text("");
    //     newContact.addresses.forEach(function(address) {
    //       $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
    //     });
    //   });
  
    //   resetFields();
  
   });
  });