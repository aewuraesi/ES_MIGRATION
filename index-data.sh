#!/bin/bash
# this migrates the data from the input ES to the output ES

elasticdump --input=https://{ES_data_is_being_transferred_from}.eu-west-1.es.amazonaws.com/{existing_index}  \
    --output=https://{ES_data_is_being_transferred_to}.eu-west-1.es.amazonaws.com/{new_index} \
    --type=data \
    --limit=1000 --sourceOnly --maxRows=20000


# BACKUP TO FILE
# elasticdump \
#   --input=https://{ES_data_is_being_transferred_from}.eu-west-1.es.amazonaws.com/{existing_index} \
#   --output=/path_to_directory_for_backup/backup_file.json \
#   --type=data