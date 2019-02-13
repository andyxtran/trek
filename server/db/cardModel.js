const pg = require('pg');

const uri = 'postgres://nabcaedd:IXA9N6DfZg4bNpJJb3A6JgC9rI8EZNWG@stampy.db.elephantsql.com:5432/nabcaedd';
const client = new pg.Client(uri);

client.connect((err) => {
  if (err) {
    console.log('ERROR: could not connect to postgres');
    throw err;
  }
  console.log('connected to the psql db!');
});

const cardModel = {};

client
  .query(
    `
  CREATE TABLE IF NOT EXISTS cards
    (   
      card_id SERIAL PRIMARY KEY,
      title TEXT NOT NULL CHECK (title <> ''),
      company VARCHAR(100) NOT NULL CHECK (company <> ''),
      description VARCHAR(500),
      location TEXT,
      link TEXT,
      salary TEXT,
      notes TEXT,
      contact TEXT,
      priority INTEGER,
      username TEXT NOT NULL CHECK (username <> ''),
      created_date TIMESTAMP DEFAULT NOW(),
      last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `,
  )
  .then(res => res)
  .catch(e => console.error('ERROR in cardModel', e.stack));

// create a new card that is tied to a unique user
cardModel.createCard = async (req, res) => {
  const {
    title,
    company,
    description,
    location,
    link,
    salary,
    notes,
    contact,
    priority,
    username,
  } = req.body;

  return client
    .query(
      `
    INSERT INTO cards 
    (title, company, description, location, link, salary, notes, contact, priority, username)
    VALUES (
      '${title}', 
      '${company}', 
      '${description}', 
      '${location}', 
      '${link}', 
      '${salary}', 
      '${notes}',
      '${contact}',
      '${priority}',
      '${username}'
    );
  `,
    )
    .then(() => ({ cardInserted: true }))
    .catch(() => ({ cardInserted: false }));
};

cardModel.updateCard = async (req, res) => {
  const {
    card_id,
    title,
    company,
    description,
    location,
    link,
    salary,
    notes,
    contact,
    priority,
    username,
  } = req.body;

  return client
    .query(
      `UPDATE cards
       SET
       title = '${title}',
       company = '${company}',
       description = '${description}',
       location = '${location}',
       link = '${link}',
       salary = '${salary}',
       notes = '${notes}',
       contact = '${contact}',
       priority = '${priority}'
       WHERE card_id = '${card_id}'
       ;`,
    )
    .then(res => res)
    .catch((err) => {
      console.log('err in cardModel', err);
      return false;
    });
};

// DELETE row in cards that match card_id
cardModel.deleteCard = async (req, res) => {
  const { card_id } = req.body;
  console.log('deletcard is running in the server. card_id:', card_id);
  return client
    .query(`DELETE FROM cards WHERE card_id = ${card_id};`)
    .then(res => true)
    .catch((err) => {
      console.log('ERROR with deleting card in database', err);
      return false;
    });
};

// DELETE all rows in cards that match given uuid
cardModel.deleteAllCards = async (req, res) => {
  // return client.query(`DELETE FROM cards WHERE uuid = uuid)`)
  //     .then((res) => {
  //     return true;
  //     })
  //     .catch((err) => {
  //     console.log('ERROR with deleting cards in database', err);
  //     return false;
  //     });
};

// retrieve all rows in cards that match given uuid
cardModel.getCards = async (req, res) => {
  const { username } = req.body;
  return client
    .query(`SELECT * FROM cards WHERE username = '${username}';`)
    .then(res => res.rows)
    .catch((err) => {
      console.log('ERROR with getting cards from database');
      return false;
    });
};
module.exports = cardModel;
