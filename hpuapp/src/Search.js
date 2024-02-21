import React, { useEffect, useState } from 'react';

const SearchPage = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    city: '',
    minPrice: '',
    maxPrice: '',
  });

  useEffect(() => {
    // Fetch property data from the backend API
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      // Make an API call to fetch the property data
      const response = await fetch('/api/properties'); // Replace with your API endpoint

      if (response.ok) {
        const data = await response.json();
        setProperties(data);
        setFilteredProperties(data);
      } else {
        console.error('Error fetching properties:', response.status);
      }
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const handleFilterChange = (e) => {
    setFilterOptions({ ...filterOptions, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    const { city, minPrice, maxPrice } = filterOptions;
    let filteredProperties = properties;

    if (city) {
      filteredProperties = filteredProperties.filter(
        (property) => property.city.toLowerCase() === city.toLowerCase()
      );
    }

    if (minPrice) {
      filteredProperties = filteredProperties.filter(
        (property) => property.price >= parseInt(minPrice)
      );
    }

    if (maxPrice) {
      filteredProperties = filteredProperties.filter(
        (property) => property.price <= parseInt(maxPrice)
      );
    }

    setFilteredProperties(filteredProperties);
  };

  return (
    <div>
      <h1>Search Properties</h1>
      <div>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={filterOptions.city}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Minimum Price:
          <input
            type="number"
            name="minPrice"
            value={filterOptions.minPrice}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Maximum Price:
          <input
            type="number"
            name="maxPrice"
            value={filterOptions.maxPrice}
            onChange={handleFilterChange}
          />
        </label>
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul>
        {filteredProperties.map((property) => (
          <li key={property.id}>
            <h2>{property.title}</h2>
            <p>{property.city}</p>
            <p>Price: ${property.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
