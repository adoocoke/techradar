//This is the title for your window tab, and your Radar
document.title = "***'s Technology Radar";


//This is the concentic circles that want on your radar
var radar_arcs = [
    {'r': 100, 'name': 'Adopt'}
    , {'r': 200, 'name': 'Trial'}
    , {'r': 300, 'name': 'Assess'}
    , {'r': 400, 'name': 'Hold'}
    // ,{'r':500,'name':'Possible Extra if you want it'}
];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize:
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1000;
var w = 1200;

var radar_data = [
    {
        "quadrant": "Techniques",
        "left": 45,
        "top": 18,
        "color": "#8FA227",
        "items": [
            {name: 'Git flow / Pull Requests ^', pc: {r: 230, t: 133}, movement: 'c'},
            {name: "SBT", pc: {"r": 250, "t": 165}, movement: "c"},
            {name: "Flyaway", pc: {"r": 225, "t": 120}, movement: "c"},
            {name: "Node", pc: {"r": 280, "t": 110}, movement: "c"},
            {name: "XP", pc: {"r": 230, "t": 110}, movement: "c"},
            {name: "Single Page App", pc: {"r": 150, "t": 95}, movement: "c", "url": "http://www.google.com"},
            {name: "Build Pipelines", pc: {"r": 180, "t": 100}, movement: "c"},
            {name: "Clean Code", pc: {"r": 130, "t": 120}, movement: "c"},
            {name: "E2E test", pc: {"r": 130, "t": 165}, movement: "c"},
            {name: "Code Reviews", pc: {"r": 110, "t": 110}, movement: "c"},
            {name: "Pug/Jade", pc: {"r": 110, "t": 110}, movement: "c"},
            {name: "Coding architects", pc: {"r": 90, "t": 170}, movement: "c"}
        ]
    },
    {
        "quadrant": "Tools",
        "left": w - 200 + 30,
        "top": 18,
        "color": "#587486",
        "items": [
            {'name': 'Docker', pc: {r: 170, t: 19}, movement: 't'},
            {'name': 'GoCD', pc: {r: 150, t: 69}, movement: 'c'},
            {'name': 'RAML', pc: {r: 180, t: 82}, movement: 'c'},
            {'name': 'Mockito', pc: {r: 170, t: 84}, movement: 'c', domain: 'back-end'},
            {'name': 'Json Web Tokens (JWT)', pc: {r: 180, t: 77}, movement: 'c'},
            {'name': 'Sonar', pc: {r: 160, t: 82}, movement: 'c'},
            {'name': 'Git', pc: {r: 130, t: 73}, movement: 'c'},
            {'name': 'Ansible', pc: {r: 280, t: 74}, movement: 'c'},
            {'name': 'Trello', pc: {r: 260, t: 75}, movement: 'c'},
            {'name': 'Jira', pc: {r: 260, t: 48}, movement: 'c'},
            {'name': 'Jacoco', pc: {r: 280, t: 51}, movement: 'c'},
            {'name': 'ELK', pc: {r: 30, t: 72}, movement: 'c', domain: 'back-end'},
            {'name': 'SBT', pc: {r: 80, t: 76}, movement: 'c'},
            {'name': 'Postgres', pc: {r: 330, t: 5}, movement: 'c'},
            {'name': 'Cucumber', pc: {r: 330, t: 18}, movement: 'c'}
        ]
    },
    {
        "quadrant": "Platforms",
        "left": 45,
        "top": (h / 2 + 18),
        "color": "#DC6F1D",
        "items": [
            {name: "Location based services", pc: {"r": 130, "t": 230}, movement: "c"},
            {name: "Ali Cloud", pc: {"r": 270, "t": 195}, movement: "c"},
            {name: "ALi Cloud", pc: {"r": 90, "t": 250}, movement: "c"},
            {name: "Ruby On Rails", pc: {"r": 390, "t": 215}, movement: "c"}

        ]
    },
    {
        "quadrant": "Languages & Frameworks",
        "color": "#B70062",
        "left": (w - 200 + 30),
        "top": (h / 2 + 18),
        "items": [
            {name: 'Vue.js', pc: {r: 60, t: 290}, movement: 'c'},
            {name: 'Jersey', pc: {r: 60, t: 310}, movement: 'c'},
            {name: 'Guice', pc: {r: 60, t: 278}, movement: 'c'},
            {name: "Java 8", pc: {"r": 130, "t": 355}, movement: "c"},
            {name: "Scala - the good parts ^", pc: {"r": 290, "t": 320}, movement: "c"},
            {name: "Play2.5", pc: {"r": 220, "t": 275}, movement: "c"},
            {name: "Ruby", pc: {"r": 270, "t": 282}, movement: "c"},
            {name: "ECMA2016", pc: {"r": 285, "t": 330}, movement: "c"},
            {name: "Actor", pc: {"r": 280, "t": 310}, movement: "c"},
            {name: 'Spring ^', pc: {r: 360, t: 330}, movement: 'c'},
            {name: "Web Objects", pc: {"r": 390, "t": 290}, movement: "c"}
        ]
    }
];
