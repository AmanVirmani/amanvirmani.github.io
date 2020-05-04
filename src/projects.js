let projects = [
  {
    thumbnail: "",
    title: "Path Planning using Dijkstra Algorithm",
    iframeSrc: "../assets/images/output.gif",
    content:
      "<p>Dijkstra Algorithm is used to find the shortest path from a start to a goal point. This algorithm was first developed by Edsger W. Dijkstra, hence the name.</p>" +
      "<p>The map has been divided into discrete nodes and action space is of size 8 in top, top-left, left, bottom-left, bottom, bottom-right, right and top-right direction.Time Complexity of this algorithm is O(E*log V) where E and V are the number of edges and vertices in the graph.</p>",
  },
  {
    thumbnail: "",
    title: "Butler",
    iframeSrc: "https://www.youtube.com/embed/iXygtbfl7JQ",
    content:
      "<p>This project implements a material handling robot simulation inspired by an autonomous robot called “Butler” originally developed by GreyOrange which optimizes goods-to-Person transport.</p>" +
      "<p>Our approach is to develop a Butler robot simulation in which the robot picks-up and delivers objects from and to known stations upon an unknown user or system generated order being issued. Assuming a environment map known at priori, our Butler robot uses the TurtleBot robot as its base platform and uses its distance measurement sensor to dynamically avoid obstacles as it follows its trajectory for delivering object from the collection station to a destination station. The robot starts and ends its delivery cycle at a home or charging station location.</p>" +
      "<p>The robotic system pre-plans a potential optimal trajectory for navigation. To show the successful pick-up and delivery of the objects by the robot, at the pickup location the Butler will publish a message indicating the pickup action and the object will disappear from the collection station; similarly, at the destination location the Butler will publish a message indicating the delivery action and the object will appear at the destination location.</p>",
  },
  {
    thumbnail: "",
    title: "Human-Obstacle-Detection",
    iframeSrc: "https://www.youtube.com/embed/t2idBJXhHqs",
    content:
      "<p>Object detection is necessary branch for robotics, especially autonomous robots. In order to navigate a robot in the real world, it is necessary to create a perception of the surrounding in robot’s reference frame. Human detection is a vital problem in the field of object detection. It is absolutely essential for a robot to detect and avoid human obstacles for the safety of people in the working environment of the robot. Plethora of work has been done to solve the problem of human detection. Color based approaches don’t perform well for varying lighting conditions. Although deep learning approaches provide state of the art results, but they require too much computational power. I have used HOG feature based approach for this module, because it provides good results and is computationally efficient.</p>" +
      "<p>I have designed a module, for the ACME Robotics, to detect the positions of humans around the robot. The module works by taking an image and processing it to produce rectangular bounding regions around the detected humans in the environment. The pixel coordinates of the bounding boxes can then be to track the location of human with respect to the robot’s frame of reference. Such a system will help in human obstacle detection and avoidance when the robot is navigation in the real world.</p>" +
      "<p>In order to implement this module, INRIA Person Dataset with set of images containing humans (positive images) and a set not containing humans (negative images) is used. First, Histogram of oriented gradient (HOG) features is calculated for each of the image. These HOG vectors are then used as input to train the Support Vector Machine classifier to detect the location of humans in each image. The output of the SVM is compared to the ground truth labels and the error is then fed back to train the classifier. This trained classifier can then be used for real time estimation of human’s position. Training feature will be provided with the module so that it can be improved over time with adding more training data.</p>",
  },
  {
    thumbnail: "",
    title: "8085 based connect 4",
    iframeSrc: "https://www.youtube.com/embed/Vczo4XK2sJw",
    content:
      "<p>Connect-Four is a tic-tac-toe-like two-player game in which players alternately place pieces on a vertical board consisting of 4 rows and 4 columns. Each player uses discs(represented by LEDs) of a particular color (commonly red and green), and the objective of the game is to connect four of one’s own discs of the same color next to each other vertically, horizontally, or diagonally before your opponent. Because the board is vertical, pieces inserted in a given column always drop to the lowest unoccupied row of that column. As soon as a column contains 4 pieces, it is full and no other piece can be placed in the column. Both players begin with 8 identical pieces, and the first player to achieve a line of four connected pieces wins the game. If all 16 chances are played and no player has places four pieces in a row, the game is drawn. Scores are displayed on seven segment LED display.</p>",
  },
];

$(document).ready(function() {
    let html = "";
    $.each(projects, function(key, value) {
         html+= '<article>'+
         '<h3 class="title">' + value.title + '</h3>' +
         '<div class="thumbnail">' +
         '<iframe width="95%" height="300" src="' + value.iframeSrc + '"frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
         let content = '<div class="content">'+ value.content + '</div></article>';
         html+= content;
      });
      $('.post-container').html(html)
});


