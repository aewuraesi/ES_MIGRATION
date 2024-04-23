#!/bin/bash
# this handles the mapping

#input handles the ES where data is coming from
#output handles where data is going to
elasticdump --input=https://{ES_data_is_being_transferred_from}.eu-west-1.es.amazonaws.com/{existing_index}  \
    --output=https://{ES_data_is_being_transferred_to}.eu-west-1.es.amazonaws.com/{new_index} \
    --type=mapping
