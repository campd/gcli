/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

define(function(require, exports, module) {

  require('gcli/index');

  require('gcli/commands/help').startup();
  require("test/commands").setup();
  require('demo/commands/basic').startup();
  require('demo/commands/bugs').startup();
  require('demo/commands/demo').startup();
  require('demo/commands/experimental').startup();

});
