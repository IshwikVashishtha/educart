const pyqs = [
    {
        id: 1,
        subject: "Mathematics",
        semester: "1st Semester",
        year: "2023",
        pdfLink: "math.pdf"
    },
    {
        id: 2,
        subject: "Physics",
        semester: "2nd Semester",
        year: "2023",
        pdfLink: "https://example.com/physics_2nd_mechanics.pdf"
    },
    {
        id: 3,
        subject: "Chemistry",
        semester: "1st Semester",
        year: "2023",
        pdfLink: "https://example.com/chemistry_1st_organic.pdf"
    },
    {
        id: 4,
        subject: "Computer Science",
        semester: "3rd Semester",
        year: "Data Structures Notes",
        pdfLink: "https://example.com/cs_3rd_data_structures.pdf"
    },
    {
        id: 5,
        subject: "Electrical Engineering",
        semester: "1th Semester",
        year: "2020-21",
        pdfLink: "BEE PYQ/2020-21.bdf"
    },
    {
        id: 6,
        subject: "Electrical Engineering",
        semester: "1th Semester",
        year: "2021-22",
        pdfLink: "BEE PYQ/2021-22.bdf"
    },
    {
        id: 7,
        subject: "Electrical Engineering",
        semester: "1th Semester",
        year: "2022-23",
        pdfLink: "BEE PYQ/2022-23.bdf"
    },
    {
        id: 6,
        subject: "Mechanical Engineering",
        semester: "5th Semester",
        year: "Thermodynamics Notes",
        pdfLink: "https://example.com/me_5th_thermodynamics.pdf"
    },
    {
        id: 7,
        subject: "Civil Engineering",
        semester: "6th Semester",
        year: "Structural Analysis Notes",
        pdfLink: "https://example.com/ce_6th_structural_analysis.pdf"
    }
];

function generatepyqsList(filteredpyqs) {
    const pyqsList = document.getElementById("pyqs-list");
    pyqsList.innerHTML = "";
    filteredpyqs.forEach((pyqs) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <h3>${pyqs.year}</h3>
            <p><strong>Subject:</strong> ${pyqs.subject}</p>
            <p><strong>Semester:</strong> ${pyqs.semester}</p>
            <a href="${pyqs.pdfLink}" download>Download PDF</a>
        `;
        pyqsList.appendChild(listItem);
    });
}

document.getElementById("apply-filter").addEventListener("click", () => {
    const subject = document.getElementById("subject-filter").value;
    const semester = document.getElementById("semester-filter").value;
    const year = document.getElementById("year-filter").value;
    const filteredpyqs = pyqs.filter(pyqs => {
        return (subject === "" || pyqs.subject === subject) &&
               (semester === "" || pyqs.semester === semester)&&
               (year === "" || pyqs.year === year);
    });
    generatepyqsList(filteredpyqs);
});

generatepyqsList(pyqs);
