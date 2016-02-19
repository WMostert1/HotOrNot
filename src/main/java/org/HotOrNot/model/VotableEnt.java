package org.HotOrNot.model;

import javax.persistence.Entity;
import java.io.Serializable;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Version;
import javax.persistence.Enumerated;
import org.HotOrNot.model.EntityType;
import javax.validation.constraints.NotNull;
import javax.xml.bind.annotation.XmlRootElement;
@Entity
@XmlRootElement
public class VotableEnt implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", updatable = false, nullable = false)
	private Long id;
	@Version
	@Column(name = "version")
	private int version;

	@Column
	@NotNull
	private String imageURL;

	@Column
	@NotNull
	private Integer hotOrNot;

	@Enumerated
	@NotNull
	private EntityType entityType;

	public Long getId() {
		return this.id;
	}

	public void setId(final Long id) {
		this.id = id;
	}

	public int getVersion() {
		return this.version;
	}

	public void setVersion(final int version) {
		this.version = version;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (!(obj instanceof VotableEnt)) {
			return false;
		}
		VotableEnt other = (VotableEnt) obj;
		if (id != null) {
			if (!id.equals(other.id)) {
				return false;
			}
		}
		return true;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	public String getImageURL() {
		return imageURL;
	}

	public void setImageURL(String imageURL) {
		this.imageURL = imageURL;
	}

	public Integer getHotOrNot() {
		return hotOrNot;
	}

	public void setHotOrNot(Integer hotOrNot) {
		this.hotOrNot = hotOrNot;
	}

	public EntityType getEntityType() {
		return entityType;
	}

	public void setEntityType(EntityType entityType) {
		this.entityType = entityType;
	}

	@Override
	public String toString() {
		String result = getClass().getSimpleName() + " ";
		if (imageURL != null && !imageURL.trim().isEmpty())
			result += "imageURL: " + imageURL;
		if (hotOrNot != null)
			result += ", hotOrNot: " + hotOrNot;
		return result;
	}
}