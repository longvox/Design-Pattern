function run(name, callback) {
  console.log(name.padEnd(80, '='));
  callback();
  console.log("".padEnd(80, "="));
  console.log();
}

run("1. Singleton ", () => require('./1.1_singleton'));
run("2. Builder ", () => require('./1.2_builder'));
run("3. Factory Method ", () => require('./1.3_factory_method'));
run("4. Abstract Factory ", () => require('./1.4_abstract_factory'));
run("5. Prototype ", () => require('./1.5_prototype'));
run("6. Adapter ", () => require('./2.1_adaptor'));
run("7. Bridge ", () => require('./2.2_bride'));
run("8. Composite ", () => require('./2.3_composite'));
run("9. Decorator ", () => require('./2.4_decorator'));
run("10. Facade ", () => require('./2.5_facade'));
run("11. Flyweight ", () => require('./2.6_flyweight'));
run("12. Proxy ", () => require('./2.7_proxy'));
run("13. Chain of Responsibility ", () => require('./3.1_chain_of_responsibility'));
run("14. Command ", () => require('./3.2_command'));
run("15. Iterator ", () => require('./3.3_iterator'));
run("16. Mediator ", () => require('./3.4_mediator'));
run("17. Memento ", () => require('./3.5_memento'));
run("18. Observer ", () => require('./3.6_observer'));
run("19. State ", () => require('./3.7_state'));
run("20. Strategy ", () => require('./3.8_strategy'));
run("21. Template Method ", () => require('./3.9_template_method'));
run("22. Visitor ", () => require('./3.10_visitor'));
