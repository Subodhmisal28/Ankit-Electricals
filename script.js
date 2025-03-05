function showSection(sectionId) {
    // Hide all sections first
    document.getElementById("home").style.display = "none";
    document.getElementById("products").style.display = "none";
    document.getElementById("services").style.display = "none";
    document.getElementById("contact").style.display = "none";

    // Show the selected section
    document.getElementById(sectionId).style.display = "block";
}
