//this scripts checks if the index the data is being migrated to already exists
//and creates it if doesn't
const elasticsearch = require('elasticsearch');

// Replace with your Elasticsearch endpoint
const client = new elasticsearch.Client({
  host: '{host_es_endpoint}',
  log: 'info',
});

const indexName = 'es_index'; // Replace with your desired index name

const createEmptyIndex = async () => {
  try {
    const indexExists = await client.indices.exists({ index: indexName });

    if (indexExists) {
      console.log(`Index '${indexName}' already exists.`);
      return;
    }

    const response = await client.indices.create({
      index: indexName,
    });

    console.log(`Empty index '${indexName}' created. Response:`, response);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    client.close(); // Close the Elasticsearch client connection
  }
};

createEmptyIndex();