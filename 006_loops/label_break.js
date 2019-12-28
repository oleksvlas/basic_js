foo: {
    console.log('пере');
    break foo;
    console.log('ця частина не виконається');
}
console.log('стрибнув');