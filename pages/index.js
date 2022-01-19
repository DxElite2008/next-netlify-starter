<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>weather</title>
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">

  <!-- jQuery library -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

  <!-- Latest compiled JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>

</head>

<body>
  <nav class="row" style="background: grey; color: white;">
    <div align="center"><h1 class="col-md-3 text-center">Weather Detector</h1></div>
  </nav>
  <br />
  <br />
  <center class="row">
    <form action="" method="post" class="col-md-6 col-md-offset-3">
      {% csrf_token %}
      <div class="input-group">
        <input type="text" class="form-control" name="city" placeholder="Search">
        <div class="input-group-btn">
          <button class="btn btn-default" type="submit">
            <i class="glyphicon glyphicon-search"></i>
          </button>
        </div>
        <form>
  </center>
  <div class="row">
    {% if data.country_code %}
    <div class="col-md-6 col-md-offset-3">
      <h1>{{city}}</h1>
      <h3>country code : {{data.country_code}}</h1>
        <h5>coordinate : {{data.coordinate}}</h5>
        <h5>temp : {{data.temp}}</h5>
        <h5>pressure : {{data.pressure}} </h5>
        <h5>humidity : {{data.humidity}}</h5>
    </div>
    {% endif %}
  </div>
</body>

</html>
