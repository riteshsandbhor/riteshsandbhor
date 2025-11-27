// ============================================
// DATA LOADING OPTIONS
// ============================================
// Option 1: Hardcoded data (currently active)
// Option 2: Load from JSON file (uncomment loadVoterData call at bottom)
// Option 3: Load from CSV file (see loadFromCSV function)
// Option 4: Load from Google Sheets (see loadFromGoogleSheets function)
// ============================================

// Voter data - Embedded directly (works without server)
// This data is loaded from data/voters.json and embedded here for direct file access
let voterData = [
    {"voterNo":31,"voterId":"5502093045","fullNameMarathi":"नचिकेत विठठलराव भुजबळ","fullNameEnglish":"Nachiket Viththalrao Bhujbal","relativeNameMarathi":"वडिलांचे नाव : विठठलराव भुजबळ","relativeNameEnglish":"Father's Name: Viththalrao Bhujbal","houseNoMarathi":"१५२८","houseNoEnglish":"1528","age":40,"genderMarathi":"पु","genderEnglish":"Male"},
    {"voterNo":32,"voterId":"KXH2967107","fullNameMarathi":"छबल भाउ दौंडकर","fullNameEnglish":"Chabal Bhau Daundkar","relativeNameMarathi":"वडिलांचे नाव : भाउ दौंडकर","relativeNameEnglish":"Father's Name: Bhau Daundkar","houseNoMarathi":"१५३४","houseNoEnglish":"1534","age":65,"genderMarathi":"पु","genderEnglish":"Male"},
    {"voterNo":33,"voterId":"KXH2962165","fullNameMarathi":"विजय पांडुरंग दिवेकर","fullNameEnglish":"Vijay Pandurang Divekar","relativeNameMarathi":"वडिलांचे नाव : पांडुरंग दिवेकर","relativeNameEnglish":"Father's Name: Pandurang Divekar","houseNoMarathi":"१५३४","houseNoEnglish":"1534","age":48,"genderMarathi":"पु","genderEnglish":"Male"},
    {"voterNo":34,"voterId":"KXH2962173","fullNameMarathi":"माधुरी विजय दिवेकर","fullNameEnglish":"Madhuri Vijay Divekar","relativeNameMarathi":"पतीचे नाव : विजय दिवेकर","relativeNameEnglish":"Husband's Name: Vijay Divekar","houseNoMarathi":"१५३४","houseNoEnglish":"1534","age":47,"genderMarathi":"स्त्री","genderEnglish":"Female"},
    {"voterNo":35,"voterId":"KXH2966919","fullNameMarathi":"सुनिल विष्णुपंत घोडके","fullNameEnglish":"Sunil Vishnupant Ghodke","relativeNameMarathi":"वडिलांचे नाव : विष्णुपंत घोडके","relativeNameEnglish":"Father's Name: Vishnupant Ghodke","houseNoMarathi":"१५३४","houseNoEnglish":"1534","age":62,"genderMarathi":"पु","genderEnglish":"Male"},
    {"voterNo":36,"voterId":"KXH2967230","fullNameMarathi":"अजंली सुनिल घोडके","fullNameEnglish":"Anjali Sunil Ghodke","relativeNameMarathi":"पतीचे नाव : सुनिल घोडके","relativeNameEnglish":"Husband's Name: Sunil Ghodke","houseNoMarathi":"१५३४","houseNoEnglish":"1534","age":0,"genderMarathi":"स्त्री","genderEnglish":"Female"},
    {"voterNo":37,"voterId":"KXH2966927","fullNameMarathi":"दिलीप छबल दौंडकर","fullNameEnglish":"Dilip Chabal Daundkar","relativeNameMarathi":"वडिलांचे नाव : छबल दौंडकर","relativeNameEnglish":"Father's Name: Chabal Daundkar","houseNoMarathi":"१५३६","houseNoEnglish":"1536","age":46,"genderMarathi":"पु","genderEnglish":"Male"},
    {"voterNo":38,"voterId":"5501524933","fullNameMarathi":"बाळासाहेब शांताराम सांडभोर","fullNameEnglish":"Balasaheb Shantaram Sandbhor","relativeNameMarathi":"वडिलांचे नाव : शांताराम सांडभोर","relativeNameEnglish":"Father's Name: Shantaram Sandbhor","houseNoMarathi":"१५३७","houseNoEnglish":"1537","age":48,"genderMarathi":"पु","genderEnglish":"Male"},
    {"voterNo":39,"voterId":"5507152093","fullNameMarathi":"गोरक्षनाथ शांताराम सांडभोर","fullNameEnglish":"Gorakshanath Shantaram Sandbhor","relativeNameMarathi":"वडिलांचे नाव : शांताराम सांडभोर","relativeNameEnglish":"Father's Name: Shantaram Sandbhor","houseNoMarathi":"१५३७","houseNoEnglish":"1537","age":44,"genderMarathi":"पु","genderEnglish":"Male"},
    {"voterNo":40,"voterId":"5602210128","fullNameMarathi":"आशा बाबासाहेब सांडभोर","fullNameEnglish":"Asha Babasaheb Sandbhor","relativeNameMarathi":"वडिलांचे नाव : बाबासाहेब सांडभोर","relativeNameEnglish":"Father's Name: Babasaheb Sandbhor","houseNoMarathi":"१५३७","houseNoEnglish":"1537","age":42,"genderMarathi":"स्त्री","genderEnglish":"Female"},
    {"voterNo":41,"voterId":"5501524958","fullNameMarathi":"किसन शंकर गोपाळे","fullNameEnglish":"Kisan Shankar Gopale","relativeNameMarathi":"वडिलांचे नाव : शंकर गोपाळे","relativeNameEnglish":"Father's Name: Shankar Gopale","houseNoMarathi":"१५४१","houseNoEnglish":"1541","age":48,"genderMarathi":"पु","genderEnglish":"Male"},
    {"voterNo":42,"voterId":"5501524941","fullNameMarathi":"निलेश शिवाजी वरकड","fullNameEnglish":"Nilesh Shivaji Varkad","relativeNameMarathi":"वडिलांचे नाव : शिवाजी वरकड","relativeNameEnglish":"Father's Name: Shivaji Varkad","houseNoMarathi":"१५४१","houseNoEnglish":"1541","age":42,"genderMarathi":"पु","genderEnglish":"Male"},
    {"voterNo":43,"voterId":"5508813131","fullNameMarathi":"स्मिता विलास पवळे","fullNameEnglish":"Smita Vilas Pavale","relativeNameMarathi":"पतीचे नाव : विलास पवळे","relativeNameEnglish":"Husband's Name: Vilas Pavale","houseNoMarathi":"१५५०","houseNoEnglish":"1550","age":43,"genderMarathi":"स्त्री","genderEnglish":"Female"},
    {"voterNo":44,"voterId":"5501524974","fullNameMarathi":"धनंजय दिगंबर सांडभोर","fullNameEnglish":"Dhananjay Digambar Sandbhor","relativeNameMarathi":"वडिलांचे नाव : दिगंबर सांडभोर","relativeNameEnglish":"Father's Name: Digambar Sandbhor","houseNoMarathi":"१५५०","houseNoEnglish":"1550","age":0,"genderMarathi":"पु","genderEnglish":"Male"},
    {"voterNo":45,"voterId":"KXH2968311","fullNameMarathi":"उज्वला विजय सांडभोर","fullNameEnglish":"Ujwala Vijay Sandbhor","relativeNameMarathi":"पतीचे नाव : विजय सांडभोर","relativeNameEnglish":"Husband's Name: Vijay Sandbhor","houseNoMarathi":"१५५०","houseNoEnglish":"1550","age":45,"genderMarathi":"स्त्री","genderEnglish":"Female"},
    {"voterNo":46,"voterId":"KXH2968642","fullNameMarathi":"उर्मिला दिगंबर सांडभोर","fullNameEnglish":"Urmila Digambar Sandbhor","relativeNameMarathi":"वडिलांचे नाव : दिगंबर सांडभोर","relativeNameEnglish":"Father's Name: Digambar Sandbhor","houseNoMarathi":"१५५०","houseNoEnglish":"1550","age":42,"genderMarathi":"स्त्री","genderEnglish":"Female"},
    {"voterNo":47,"voterId":"5501296863","fullNameMarathi":"शर्मिला दिगंबर सांडभोर","fullNameEnglish":"Sharmila Digambar Sandbhor","relativeNameMarathi":"पतीचे नाव : दिगंबर सांडभोर","relativeNameEnglish":"Husband's Name: Digambar Sandbhor","houseNoMarathi":"१५५०","houseNoEnglish":"1550","age":39,"genderMarathi":"स्त्री","genderEnglish":"Female"},
    {"voterNo":48,"voterId":"KXH2968584","fullNameMarathi":"वरद शंकर सांडभोर","fullNameEnglish":"Varad Shankar Sandbhor","relativeNameMarathi":"वडिलांचे नाव : शंकर सांडभोर","relativeNameEnglish":"Father's Name: Shankar Sandbhor","houseNoMarathi":"१५५०","houseNoEnglish":"1550","age":39,"genderMarathi":"पु","genderEnglish":"Male"},
    {"voterNo":49,"voterId":"5601524990","fullNameMarathi":"संदीप मारुती कुटे","fullNameEnglish":"Sandip Maruti Kute","relativeNameMarathi":"वडिलांचे नाव : मारुती कुटे","relativeNameEnglish":"Father's Name: Maruti Kute","houseNoMarathi":"१६४१","houseNoEnglish":"1641","age":44,"genderMarathi":"पु","genderEnglish":"Male"},
    {"voterNo":50,"voterId":"5501524982","fullNameMarathi":"दिपाली संदीप कुटे","fullNameEnglish":"Dipalī Sandip Kute","relativeNameMarathi":"पतीचे नाव : संदीप कुटे","relativeNameEnglish":"Husband's Name: Sandip Kute","houseNoMarathi":"१६४१","houseNoEnglish":"1641","age":37,"genderMarathi":"स्त्री","genderEnglish":"Female"},
    {"voterNo":51,"voterId":"5509098534","fullNameMarathi":"संदीप सातपुते","fullNameEnglish":"Sandip Satpute","relativeNameMarathi":"वडिलांचे नाव : सातपुते","relativeNameEnglish":"Father's Name: Satpute","houseNoMarathi":"98&R. Chakrachar Chhaya","houseNoEnglish":"98&R. Chakrachar Chhaya","age":39,"genderMarathi":"पु","genderEnglish":"Male"},
    {"voterNo":52,"voterId":"5501525005","fullNameMarathi":"अशोक रामचंद्र डोंगरे","fullNameEnglish":"Ashok Ramchandra Dongre","relativeNameMarathi":"वडिलांचे नाव : रामचंद्र डोंगरे","relativeNameEnglish":"Father's Name: Ramchandra Dongre","houseNoMarathi":"१८११","houseNoEnglish":"1811","age":60,"genderMarathi":"पु","genderEnglish":"Male"},
    {"voterNo":53,"voterId":"5501525021","fullNameMarathi":"कल्पना अशोक डोंगरे","fullNameEnglish":"Kalpana Ashok Dongre","relativeNameMarathi":"पतीचे नाव : अशोक डोंगरे","relativeNameEnglish":"Husband's Name: Ashok Dongre","houseNoMarathi":"१८११","houseNoEnglish":"1811","age":53,"genderMarathi":"स्त्री","genderEnglish":"Female"},
    {"voterNo":54,"voterId":"5501525013","fullNameMarathi":"विक्रम अशोक डोंगरे","fullNameEnglish":"Vikram Ashok Dongre","relativeNameMarathi":"वडिलांचे नाव : अशोक डोंगरे","relativeNameEnglish":"Father's Name: Ashok Dongre","houseNoMarathi":"१८११","houseNoEnglish":"1811","age":35,"genderMarathi":"पु","genderEnglish":"Male"},
    {"voterNo":55,"voterId":"5502093060","fullNameMarathi":"स्वाती निलेश गोरे","fullNameEnglish":"Swati Nilesh Gore","relativeNameMarathi":"पतीचे नाव : निलेश गोरे","relativeNameEnglish":"Husband's Name: Nilesh Gore","houseNoMarathi":"१९४०","houseNoEnglish":"1940","age":41,"genderMarathi":"स्त्री","genderEnglish":"Female"},
    {"voterNo":56,"voterId":"KXH2962413","fullNameMarathi":"निलेश अंबादास गोरे","fullNameEnglish":"Nilesh Ambadas Gore","relativeNameMarathi":"वडिलांचे नाव : अंबादास गोरे","relativeNameEnglish":"Father's Name: Ambadas Gore","houseNoMarathi":"१९४०","houseNoEnglish":"1940","age":49,"genderMarathi":"पु","genderEnglish":"Male"},
    {"voterNo":57,"voterId":"KXH2970432","fullNameMarathi":"जयदीप जिजाराम शिंदे","fullNameEnglish":"Jaydeep Jijaram Shinde","relativeNameMarathi":"वडिलांचे नाव : जिजाराम शिंदे","relativeNameEnglish":"Father's Name: Jijaram Shinde","houseNoMarathi":"१९४१","houseNoEnglish":"1941","age":0,"genderMarathi":"पु","genderEnglish":"Male"},
    {"voterNo":58,"voterId":"5508813271","fullNameMarathi":"सुप्रिया जयदीप शिंदे","fullNameEnglish":"Supriya Jaydeep Shinde","relativeNameMarathi":"पतीचे नाव : जयदीप शिंदे","relativeNameEnglish":"Husband's Name: Jaydeep Shinde","houseNoMarathi":"१९४१","houseNoEnglish":"1941","age":35,"genderMarathi":"स्त्री","genderEnglish":"Female"},
    {"voterNo":59,"voterId":"5501296698","fullNameMarathi":"जयवंत गेनूजी घोडेकर","fullNameEnglish":"Jaywant Genuji Ghodekar","relativeNameMarathi":"वडिलांचे नाव : गेनूजी घोडेकर","relativeNameEnglish":"Father's Name: Genuji Ghodekar","houseNoMarathi":"१९४२","houseNoEnglish":"1942","age":83,"genderMarathi":"पु","genderEnglish":"Male"},
    {"voterNo":60,"voterId":"KXH2960060","fullNameMarathi":"राजश्री जयंत घोडेकर","fullNameEnglish":"Rajashri Jayant Ghodekar","relativeNameMarathi":"पतीचे नाव : जयंत घोडेकर","relativeNameEnglish":"Husband's Name: Jayant Ghodekar","houseNoMarathi":"१९४२","houseNoEnglish":"1942","age":71,"genderMarathi":"स्त्री","genderEnglish":"Female"}
];

// Filtered data
let filteredData = [...voterData];

// Pagination variables
let currentPage = 1;
let pageSize = 50;
let totalPages = 1;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing app...');
    console.log('Voter data count:', voterData.length);
    
    // Initialize with embedded data (works without server)
    filteredData = [...voterData];
    currentPage = 1;
    
    console.log('Filtered data count:', filteredData.length);
    
    // Add event listeners
    const searchInput = document.getElementById('searchInput');
    const genderFilter = document.getElementById('genderFilter');
    const minAge = document.getElementById('minAge');
    const maxAge = document.getElementById('maxAge');
    const houseFilter = document.getElementById('houseFilter');
    const voterIdFilter = document.getElementById('voterIdFilter');
    
    if (searchInput) searchInput.addEventListener('input', applyFilters);
    if (genderFilter) genderFilter.addEventListener('change', applyFilters);
    if (minAge) minAge.addEventListener('input', applyFilters);
    if (maxAge) maxAge.addEventListener('input', applyFilters);
    if (houseFilter) houseFilter.addEventListener('input', applyFilters);
    if (voterIdFilter) voterIdFilter.addEventListener('input', applyFilters);
    
    // Render table with embedded data
    renderTable();
    updateStats();
    renderPagination();
    
    console.log(`✅ Loaded ${voterData.length} voters from embedded data`);
    
    // Note: JSON file loading only works with a web server (not when opening file directly)
    // The embedded data above is already loaded and working
    // To load from JSON file, use a local server (python -m http.server 8000)
    // Then uncomment the line below:
    // loadVoterData('data/voters.json');
});

// Render table with current filtered data (with pagination)
function renderTable() {
    const tbody = document.getElementById('voterTableBody');
    const noResults = document.getElementById('noResults');
    const tableContainer = document.getElementById('tableContainer');
    const table = document.querySelector('.table-section table');
    
    console.log('renderTable called - filteredData length:', filteredData.length);
    
    if (!tbody) {
        console.error('❌ Table body element not found!');
        return;
    }
    
    if (filteredData.length === 0) {
        console.log('No data to display');
        if (tbody) tbody.innerHTML = '';
        if (table) table.style.display = 'none';
        if (tableContainer) tableContainer.style.display = 'none';
        if (noResults) noResults.style.display = 'block';
        renderPagination();
        return;
    }
    
    // Show table and hide no results
    if (tableContainer) tableContainer.style.display = 'block';
    if (table) table.style.display = 'table';
    if (noResults) noResults.style.display = 'none';
    
    // Calculate pagination
    totalPages = Math.ceil(filteredData.length / pageSize);
    if (currentPage > totalPages && totalPages > 0) {
        currentPage = totalPages;
    }
    
    // Get data for current page
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, filteredData.length);
    const pageData = filteredData.slice(startIndex, endIndex);
    
    console.log(`Rendering page ${currentPage} of ${totalPages} - showing ${pageData.length} rows`);
    
    // Render only current page data
    const tableHTML = pageData.map(voter => `
        <tr>
            <td>${voter.voterNo}</td>
            <td>${voter.voterId}</td>
            <td>${voter.fullNameMarathi}</td>
            <td>${voter.fullNameEnglish}</td>
            <td>${voter.relativeNameMarathi}</td>
            <td>${voter.relativeNameEnglish}</td>
            <td>${voter.houseNoMarathi}</td>
            <td>${voter.houseNoEnglish}</td>
            <td>${voter.roomNo || '-'}</td>
            <td>${voter.age > 0 ? voter.age : '-'}</td>
            <td>${voter.genderMarathi}</td>
            <td>${voter.genderEnglish}</td>
        </tr>
    `).join('');
    
    tbody.innerHTML = tableHTML;
    
    // Verify table was populated
    const rowsAfter = tbody.querySelectorAll('tr').length;
    console.log(`Table rows after render: ${rowsAfter}`);
    
    if (rowsAfter === 0) {
        console.error('❌ No rows rendered! Check data structure.');
        return;
    }
    
    renderPagination();
    console.log('✅ Table rendered successfully with', rowsAfter, 'rows');
    
    // Force table to be visible with !important styles
    if (table) {
        table.style.setProperty('display', 'table', 'important');
        table.style.setProperty('visibility', 'visible', 'important');
        table.style.setProperty('opacity', '1', 'important');
    }
    if (tableContainer) {
        tableContainer.style.setProperty('display', 'block', 'important');
        tableContainer.style.setProperty('visibility', 'visible', 'important');
        tableContainer.style.setProperty('opacity', '1', 'important');
    }
    
    // Verify visibility
    setTimeout(() => {
        const tableSection = document.querySelector('.table-section');
        const visibleRows = tbody.querySelectorAll('tr:not([style*="display: none"])').length;
        console.log('Visible table rows:', visibleRows);
        console.log('Table section exists:', !!tableSection);
        console.log('Table container display:', tableContainer ? window.getComputedStyle(tableContainer).display : 'N/A');
        console.log('Table display:', table ? window.getComputedStyle(table).display : 'N/A');
        
        if (tableSection && rowsAfter > 0) {
            const rect = tableSection.getBoundingClientRect();
            console.log('Table section position:', rect.top, rect.bottom);
            console.log('Window height:', window.innerHeight);
        }
    }, 200);
}

// Apply all filters
function applyFilters() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const genderFilter = document.getElementById('genderFilter').value;
    const minAge = parseInt(document.getElementById('minAge').value) || 0;
    const maxAge = parseInt(document.getElementById('maxAge').value) || 999;
    const houseFilter = document.getElementById('houseFilter').value.toLowerCase();
    const voterIdFilter = document.getElementById('voterIdFilter').value.toLowerCase();
    
    // Reset to first page when filtering
    currentPage = 1;
    
    filteredData = voterData.filter(voter => {
        // Search filter
        const matchesSearch = !searchTerm || 
            voter.fullNameEnglish.toLowerCase().includes(searchTerm) ||
            voter.fullNameMarathi.includes(searchTerm) ||
            voter.voterId.toLowerCase().includes(searchTerm) ||
            voter.houseNoEnglish.toLowerCase().includes(searchTerm) ||
            voter.houseNoMarathi.includes(searchTerm) ||
            voter.relativeNameEnglish.toLowerCase().includes(searchTerm) ||
            voter.relativeNameMarathi.includes(searchTerm);
        
        // Gender filter
        const matchesGender = !genderFilter || voter.genderEnglish === genderFilter;
        
        // Age filter (skip if age is 0 or missing)
        const matchesAge = !minAge && !maxAge || (voter.age > 0 && voter.age >= minAge && voter.age <= maxAge);
        
        // House number filter
        const matchesHouse = !houseFilter || 
            voter.houseNoEnglish.toLowerCase().includes(houseFilter) ||
            voter.houseNoMarathi.includes(houseFilter);
        
        // Voter ID filter
        const matchesVoterId = !voterIdFilter || 
            voter.voterId.toLowerCase().includes(voterIdFilter);
        
        return matchesSearch && matchesGender && matchesAge && matchesHouse && matchesVoterId;
    });
    
    renderTable();
    updateStats();
}

// Update statistics
function updateStats() {
    document.getElementById('totalVoters').textContent = voterData.length.toLocaleString();
    document.getElementById('filteredVoters').textContent = filteredData.length.toLocaleString();
    
    const maleCount = filteredData.filter(v => v.genderEnglish === 'Male').length;
    document.getElementById('maleCount').textContent = maleCount.toLocaleString();
}

// Render pagination controls
function renderPagination() {
    const pagination = document.getElementById('pagination');
    const paginationInfo = document.getElementById('paginationInfo');
    
    if (filteredData.length === 0) {
        pagination.innerHTML = '';
        paginationInfo.textContent = 'Showing 0 - 0 of 0 entries';
        return;
    }
    
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, filteredData.length);
    paginationInfo.textContent = `Showing ${(startIndex + 1).toLocaleString()} - ${endIndex.toLocaleString()} of ${filteredData.length.toLocaleString()} entries`;
    
    // Build pagination HTML
    let paginationHTML = '';
    
    // Previous button
    paginationHTML += `
        <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="goToPage(${currentPage - 1}); return false;">
                <i class="bi bi-chevron-left"></i>
            </a>
        </li>
    `;
    
    // Page numbers
    const maxVisiblePages = 7;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    if (startPage > 1) {
        paginationHTML += `
            <li class="page-item">
                <a class="page-link" href="#" onclick="goToPage(1); return false;">1</a>
            </li>
        `;
        if (startPage > 2) {
            paginationHTML += `<li class="page-item disabled"><span class="page-link">...</span></li>`;
        }
    }
    
    for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `
            <li class="page-item ${i === currentPage ? 'active' : ''}">
                <a class="page-link" href="#" onclick="goToPage(${i}); return false;">${i}</a>
            </li>
        `;
    }
    
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            paginationHTML += `<li class="page-item disabled"><span class="page-link">...</span></li>`;
        }
        paginationHTML += `
            <li class="page-item">
                <a class="page-link" href="#" onclick="goToPage(${totalPages}); return false;">${totalPages}</a>
            </li>
        `;
    }
    
    // Next button
    paginationHTML += `
        <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="goToPage(${currentPage + 1}); return false;">
                <i class="bi bi-chevron-right"></i>
            </a>
        </li>
    `;
    
    pagination.innerHTML = paginationHTML;
}

// Go to specific page
function goToPage(page) {
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    renderTable();
    // Scroll to top of table
    document.querySelector('.table-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Change page size
function changePageSize() {
    pageSize = parseInt(document.getElementById('pageSize').value);
    currentPage = 1;
    renderTable();
}

// Reset all filters
function resetFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('genderFilter').value = '';
    document.getElementById('minAge').value = '';
    document.getElementById('maxAge').value = '';
    document.getElementById('houseFilter').value = '';
    document.getElementById('voterIdFilter').value = '';
    
    filteredData = [...voterData];
    renderTable();
    updateStats();
}

// Export to CSV function removed (button removed from UI)

// ============================================
// DATA LOADING FUNCTIONS
// ============================================

// Option 1: Load from JSON file
// Create a file: data/voters.json with your data
// Then uncomment: loadVoterData('data/voters.json'); in DOMContentLoaded
async function loadVoterData(url) {
    const loadingIndicator = document.getElementById('loadingIndicator');
    const tableContainer = document.getElementById('tableContainer');
    
    try {
        if (loadingIndicator) loadingIndicator.style.display = 'block';
        if (tableContainer) tableContainer.style.display = 'none';
        
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to load data file');
        }
        const data = await response.json();
        
        // Replace hardcoded data with loaded data
        voterData = data;
        filteredData = [...voterData];
        
        if (loadingIndicator) loadingIndicator.style.display = 'none';
        if (tableContainer) tableContainer.style.display = 'block';
        
        // Reset to first page
        currentPage = 1;
        
        // Render with loaded data
        renderTable();
        updateStats();
        renderPagination();
        
        console.log(`✅ Data loaded successfully: ${voterData.length} voters from ${url}`);
        return Promise.resolve();
    } catch (error) {
        console.error('❌ Error loading voter data from JSON:', error);
        console.error('⚠️ Make sure data/voters.json file exists and is accessible');
        
        if (loadingIndicator) loadingIndicator.style.display = 'none';
        if (tableContainer) tableContainer.style.display = 'block';
        
        // Show error message to user
        const tbody = document.getElementById('voterTableBody');
        const noResults = document.getElementById('noResults');
        if (tbody && noResults) {
            tbody.innerHTML = '';
            document.querySelector('.table-section table').style.display = 'none';
            noResults.style.display = 'block';
            noResults.innerHTML = `
                <i class="bi bi-exclamation-triangle"></i>
                <h4>Error Loading Data</h4>
                <p>Could not load data from data/voters.json</p>
                <p style="font-size: 0.9rem; color: #999;">Please ensure the file exists and you're using a web server (not opening file directly).</p>
                <p style="font-size: 0.9rem; color: #999;">For local testing, use: <code>python -m http.server 8000</code></p>
            `;
        }
        
        updateStats();
        renderPagination();
        return Promise.reject(error);
    }
}

// Option 2: Load from CSV file
// Create a file: data/voters.csv with headers matching the table columns
// Then uncomment: loadFromCSV('data/voters.csv'); in DOMContentLoaded
async function loadFromCSV(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to load CSV file');
        }
        const csvText = await response.text();
        const lines = csvText.split('\n').filter(line => line.trim());
        const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
        
        voterData = [];
        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',').map(v => v.trim().replace(/"/g, ''));
            if (values.length === headers.length) {
                const voter = {
                    voterNo: parseInt(values[0]) || i,
                    voterId: values[1] || '',
                    fullNameMarathi: values[2] || '',
                    fullNameEnglish: values[3] || '',
                    relativeNameMarathi: values[4] || '',
                    relativeNameEnglish: values[5] || '',
                    houseNoMarathi: values[6] || '',
                    houseNoEnglish: values[7] || '',
                    age: parseInt(values[8]) || 0,
                    genderMarathi: values[9] || '',
                    genderEnglish: values[10] || ''
                };
                voterData.push(voter);
            }
        }
        
        filteredData = [...voterData];
        renderTable();
        updateStats();
        console.log('Data loaded successfully from CSV:', url);
    } catch (error) {
        console.error('Error loading voter data from CSV:', error);
        console.log('Using default sample data instead');
    }
}

// Option 3: Load from Google Sheets (Public Sheet)
// 1. Publish your Google Sheet as CSV
// 2. Get the shareable link
// 3. Replace the URL below with your Google Sheets CSV export URL
// Format: https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=0
async function loadFromGoogleSheets(sheetUrl) {
    try {
        const response = await fetch(sheetUrl);
        if (!response.ok) {
            throw new Error('Failed to load Google Sheet');
        }
        const csvText = await response.text();
        const lines = csvText.split('\n').filter(line => line.trim());
        const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
        
        voterData = [];
        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',').map(v => v.trim().replace(/"/g, ''));
            if (values.length === headers.length && values[0]) {
                const voter = {
                    voterNo: parseInt(values[0]) || i,
                    voterId: values[1] || '',
                    fullNameMarathi: values[2] || '',
                    fullNameEnglish: values[3] || '',
                    relativeNameMarathi: values[4] || '',
                    relativeNameEnglish: values[5] || '',
                    houseNoMarathi: values[6] || '',
                    houseNoEnglish: values[7] || '',
                    age: parseInt(values[8]) || 0,
                    genderMarathi: values[9] || '',
                    genderEnglish: values[10] || ''
                };
                voterData.push(voter);
            }
        }
        
        filteredData = [...voterData];
        renderTable();
        updateStats();
        console.log('Data loaded successfully from Google Sheets');
    } catch (error) {
        console.error('Error loading data from Google Sheets:', error);
        console.log('Using default sample data instead');
    }
}

// File upload function removed (button removed from UI)

// ============================================
// CURRENT DATA SOURCE
// ============================================
// By default, the app uses the hardcoded voterData array above
// To change the data source, uncomment one of these options in DOMContentLoaded:
// 
// 1. JSON file: loadVoterData('data/voters.json');
// 2. CSV file: loadFromCSV('data/voters.csv');
// 3. Google Sheets: loadFromGoogleSheets('YOUR_GOOGLE_SHEETS_CSV_URL');
// ============================================

