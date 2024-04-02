# Serverless Architecture and API Integration Project

## Introduction
This project demonstrates the implementation of a serverless architecture utilizing AWS Lambda, Step Functions, and API Gateway to create REST API entry points for dynamic data processing and encryption. The primary goal is to showcase the ability to build a finite state machine that selects and executes different hashing operations based on given inputs.

## Learning Outcomes
- Understanding and applying serverless computing benefits using AWS services.
- Implementing a finite state machine with AWS Step Functions.
- Building serverless APIs using AWS API Gateway.
- Gaining knowledge about common encryption algorithms and their application.

## Requirements
- AWS Account with access to Lambda, Step Functions, and API Gateway.
- Basic knowledge of REST API principles and JSON formatting.
- Familiarity with encryption algorithms: SHA-256, MD5, and Bcrypt.

## Architecture Overview
The system comprises several components working together to process data through a state machine. Based on input, the state machine selects a Lambda function to perform one of three hashing operations. The result is then posted back to a specified endpoint.

### Components
- **AWS Lambda Functions**: Three separate functions for SHA-256, MD5, and Bcrypt hashing.
- **AWS Step Functions State Machine**: Orchestrates the workflow based on the input.
- **AWS API Gateway**: Provides REST API endpoints to interact with the state machine and Lambda functions.

## Setup Instructions
1. **Lambda Functions Setup**:
   - Created Lambda functions for each hashing operation. Refer to the AWS documentation for Lambda creation.
   - Ensured each function can receive input and return a hashed value.

2. **Step Functions State Machine**:
   - Configured a state machine in AWS Step Functions to decide which Lambda function to invoke based on the input action.
   - The state machine's input and output formats are detailed in the project documentation.

3. **API Gateway Configuration**:
   - Set up an API Gateway to create endpoints for the state machine and Lambda functions.
   - Ensured correct integration with AWS services for seamless data flow.

## Usage
- To start the process, send a POST request to the API Gateway with the required JSON structure (as detailed in the project documentation).
- The state machine will select and execute the appropriate hashing operation.
