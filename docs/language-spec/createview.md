---
title: CREATE VIEW
hide_title: false
hide_table_of_contents: false
keywords:
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query and Deploy Cloud Infrastructure and Resources using SQL
image: https://storage.googleapis.com/stackql-web-assets/blog/stackql-blog-post-featured-image.png
---
import RailroadDiagram from '/js/RailroadDiagram/RailroadDiagram.js';
//import Gist from 'react-gist';

Creates a `view` or a `materialized view` within a session which can be used to represent a long or complex `stackql` query.  

See also:  
[[ `SELECT` ]](/docs/language-spec/select) [[ `REFRESH` ]](/docs/language-spec/refreshview) [[ `DROP` ]](/docs/language-spec/dropview)

* * * 

## Syntax

*createViewStatement::=*

<RailroadDiagram 
type="createview"
/>

&nbsp;  
&nbsp;  

```sql
CREATE [ OR REPLACE ] [ MATERIALIZED ] VIEW <viewName> AS 
<selectStatement> [ UNION | JOIN <selectStatement> ];
```

* * *

## Examples

### Cross cloud `UNION` between `aws` and `google`
```sql
CREATE VIEW dual_cloud_block_storage AS
SELECT 
 'google' AS vendor, 
 name, 
 split_part(split_part(type, '/', 11), '-', 2) AS type, 
 status, 
 sizeGb AS size 
FROM google.compute.disks 
 WHERE project = '<YOUR_GCP_PROJECT>' 
 AND zone = 'australia-southeast1-a'
UNION
SELECT 
 'aws' AS vendor, 
 volumeId AS name, 
 volumeType AS type, 
 status, 
 size 
FROM aws.ec2.volumes 
 WHERE region = 'ap-southeast-2';
```

### Create and use a Materialized View
```sql
/* -------------------------- */
/* create a materialized view */
/* -------------------------- */
CREATE MATERIALIZED VIEW vw_ec2_instance_types AS 
SELECT 
 memoryInfo, 
 hypervisor, 
 autoRecoverySupported, 
 instanceType, 
 SPLIT_PART(processorInfo, '\n', 3) as processorArch, 
 currentGeneration, 
 freeTierEligible, 
 hibernationSupported,
 SPLIT_PART(vCpuInfo, '\n', 2) as vCPUs, 
 bareMetal, 
 burstablePerformanceSupported, 
 dedicatedHostsSupported 
FROM aws.ec2.instance_types 
WHERE region = 'us-east-1';
/* ------------------------- */
/* use the materialized view */
/* ------------------------- */
SELECT 
 i.instanceId, 
 i.instanceType, 
 it.vCPUs, 
 it.memoryInfo 
FROM aws.ec2.instances i 
 INNER JOIN vw_ec2_instance_types it 
 ON i.instanceType = it.instanceType 
WHERE i.region = 'us-east-1';
```