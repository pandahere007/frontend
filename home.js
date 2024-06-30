db.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to the MySQL database.');
  });
  

  app.get('/publications', (req, res) => {
    const query = 'SELECT * FROM publications';
  
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching data from the database:', err);
        res.status(500).send('An error occurred while fetching data.');
        return;
      }
  
      // Send the fetched data as a response
      res.json(results);
    });
  });

  
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  