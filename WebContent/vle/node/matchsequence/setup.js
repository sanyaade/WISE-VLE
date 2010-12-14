var coreScripts = [
	'vle/node/matchsequence/MatchSequenceNode.js',
	'vle/node/matchsequence/matchSequenceEvents.js'
];

var studentVLEScripts = [
	'vle/node/common/nodehelpers.js',
	'vle/jquery/js/jquery-1.4.2.min.js',
	'vle/jquery/js/jquery-ui-1.8.custom.min.js',
	'vle/jquery/js/jsonplugin.js',
	'vle/node/matchsequence/matchsequencedragdrop.js',
	'vle/node/matchsequence/matchsequencebucket.js',
	'vle/node/matchsequence/matchsequencechoice.js',
	'vle/node/matchsequence/matchsequencestate.js',
	'vle/node/matchsequence/matchsequence.js'
];

var authorScripts = [
	'vle/node/matchsequence/authorview_matchsequence.js'
];

var gradingScripts = [
	'vle/node/matchsequence/matchsequencestate.js'
];

var dependencies = [
	{child:"vle/node/matchsequence/MatchSequenceNode.js", parent:["vle/node/Node.js"]}
];

var css = [
	"vle/node/common/css/htmlAssessment.css",
	"vle/node/matchsequence/matchstyles.css"
];

scriptloader.addScriptToComponent('core', coreScripts);
scriptloader.addScriptToComponent('matchsequence', studentVLEScripts);
scriptloader.addScriptToComponent('author', authorScripts);
scriptloader.addScriptToComponent('studentwork', gradingScripts);
scriptloader.addDependencies(dependencies);
scriptloader.addCssToComponent('matchsequence', css);

//used to notify scriptloader that this script has finished loading
if(typeof eventManager != 'undefined'){
	eventManager.fire('scriptLoaded', 'vle/node/matchsequence/setup.js');
};