Recipes = new Mongo.Collection('recipes');

Recipes.allow({
	insert: function(userId, doc) {
		return !!userId;
	}
});

Attribute = new SimpleSchema({
	PipeDiameterInches: {
		type: String
	},
	PipeAgeYrs: {
		type: String
	},
	PipeDepthFeet: {
		type: String
	}
});

RecipeSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name",
	},

	desc: {
		type: String,
		label: "Description",
	},

	diameter: {
		type: Number,
		label: "Pipe Diameter",
	},
	age: {
		type: Number,
		label: "Pipe Age (Yrs)",
	},
	material: {
		type: String,
		allowedValues: ["AL","AK"],
		label: "Pipe Material",
	},
	fluidtype: {
		type: String,
		label: "Media Carried",
	},
	leakhistory: {
		type: String,
		label: "Number of Previous Leaks/Repairs",
	},
	Attribute: {
		type: [Attribute]
	},
	inMenu: {
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform: {
			type: "hidden"
		}
	},
	author: {
		type: String,
		label: "Author",
		autoValue: function() {
			return this.userId
		},
		autoform: {
			type: "hidden"
		},
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	}
});

Recipes.attachSchema( RecipeSchema );